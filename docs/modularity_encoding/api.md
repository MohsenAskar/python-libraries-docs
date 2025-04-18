
## Functions Overview
![svg](modularity_encoding package_smaller.svg)

The **`modularity_encoding`** package comprises **One** main function and **five** supplementary functions. These functions can either be used together in a pipeline for detailed control and inspection or executed all at once using the main function for convenience.

### Main Function
- **`modularity_encode`**: Executes the full modularity encoding workflow in a single call. This function is ideal for users who need a straightforward and quick way to apply the encoding to their dataset.

### Supplementary Functions
These functions are designed for users who prefer to manually handle each step of the process, allowing for greater flexibility and inspection at each stage:

- **`create_code_system_network`**: Constructs a network from the health coding system codes based on their occurrences within a dataset.
- **`detect_code_system_communities`**: Identifies communities (or modules) within the created network.
- **`encode_code_system_to_module`**: Assigns each code in the dataset to the detected community module, effectively reducing the dimensionality of the dataset.
- **`print_edge_list`**: Outputs a list of edges from the network, useful for debugging or detailed analysis.
- **`assign_module`**: Assigns and records the module for each code system code in the dataset.

### The main function `modularity_encode`

The **`modularity_encode`** function is used to execute the whole flow in one line of code. It takes in a pandas data frame data that contains patient data with a code_system column.
  
#### Parameters:
- **data** (`pd.DataFrame`): The input data.
- **code_system_col** (`str`, optional): Column name representing the code system. Defaults to 'code_system'.
- **patientid_col** (`str`, optional): Column name representing the patient ID. Defaults to 'patientid'.
- **resolution** (`float`, optional): Granularity of the community detection. Defaults to 1.0.
- **random_state** (`int`, optional): Seed for the random number generator. Defaults to 42.
- **output_col** (`str`, optional): Column name where the module numbers will be saved. Defaults to 'module_number'.

#### Returns:
- **tuple**:
  - **G** (`nx.Graph`): The code system network graph.
  - **data** (`pd.DataFrame`): Updated data with a new column containing module numbers for each code system.


```python
import pandas as pd
# Import the dataset (example dataset)
data = pd.DataFrame({
    'patientid': [1, 1, 2, 2],
    'code_system': ['J15', 'B24', 'I50', 'F06']
})
G, processed_data= me.modularity_encode(data, code_system_col='code_system', patientid_col='patientid', resolution=1.0, random_state=42, output_col='module_number')
```

    100%|██████████| 6/6 [00:00<00:00, 5996.15it/s]
    

The first function will do the full work. If the user wants to perform the encoding step by step, the following functions can be followed.

### The second function `create_code_system_network`

The **`create_code_system_network`** function is used to create a network of code systems based on patient data. It takes in a pandas data frame data that contains patient data with a code_system column and returns a NetworkX graph object G. The network is represented in nodes and edges. The nodes are the code of the code_system , for examples ICD-10 codes, and the edges between the nodes will represent the number of patients who had this pair of ICD-10 codes.

#### Parameters:

The function takes **3** arguments:

- *data* (`pd.DataFrame`): the defined dataset
- *code_system_col* (`str`, optional): which defines the column contain the code system 
- *patientid_col* (`str`, optional): which defines the patients ids in a longitudinal format. 

The function will count the number of patients combined each pair of code system codes and define that as the edges of the network while the nodes wil be the code system codes themselves as mentioned before. The fuction can be called as follows:


```python
G = me.create_code_system_network(data, code_system_col='code_system', patientid_col='patientid')
```

    100%|██████████| 6/6 [00:00<?, ?it/s]
    

The resulted network (**G**) is a NetworkX object and different commands of NetworkX can be applied on it by importing NetworkX module.

### The third function  `detect_code_system_communities `

The **`detect_code_system_communities`** function is used to detect communities within the code system network. It takes in a NetworkX graph object G and an optional random_state parameter for reproducibility and returns a dictionary code_system_to_module that maps each code system to its corresponding module number. The package uses the Louvain method described in Fast unfolding of communities in large networks, Vincent D Blondel, Jean-Loup Guillaume, Renaud Lambiotte, Renaud Lefebvre, Journal of Statistical Mechanics: Theory and Experiment 2008(10), P10008 (12pp). The package "community" https://github.com/taynaud/python-louvain and https://python-louvain.readthedocs.io/en/latest/api.html is used to detect the modules.

The modules can be interpreted as a cluster of code of code system which has denser connection among them than the rest of the network. As we build the network on the occurrences of these codes between patients, the modules can be interpreted as these codes of the code system tend to frequently cooccur in reality. For example if we use ICD codes (diagnoses), the modules will reveal the multimorbidity patterns in the dataset population, whereas if we use the ATC codes (medications), the modules will represent the comedication patterns in the dataset population.

#### Parameters:
- *G*:the network created in the first function *`create_code_system_network`*
- *random_state*:int, default(None), (optional)
The parameter will assign a fixes random_state value.
- *resolution*: double, default =1, (optional). 
The resolution of modularity detection can be modified in the paramerte "resolution" which will change the size of modules.  The default value is 1. represents the time described in *“Laplacian Dynamics and Multiscale Modular Structure in Networks”, R. Lambiotte, J.-C. Delvenne, M. Barahona.*

The function can be called as follows:


```python
modules = me.detect_code_system_communities(G, random_state=42, resolution=1)
modules
```




    {'B24': 0, 'J15': 0, 'F06': 1, 'I50': 1}



### The fourth function `encode_code_system_to_module `

The **`encode_code_system_to_module`** function is used to encode the code systems in a pandas data frame data to their corresponding module numbers based on the "code_system_to_module" dictionary returned from "detect_code_system_communities". It returns the original dataset with an additional column which indicates the module number this code belong to in the network.

#### Parameters:

- *data*: the network created in the first function *`create_code_system_network`*
- *modules*: defines the modules detected in the second function *"detect_code_system_communities"*
- *output_col*: specifies the desired name of the added column, by default the column name is module_numnber unless changed.

It is imporatant to change the column name after the argument "*output_col*" if the used will perform modularity encoding on more than one code system in the same dataset to prevent overwriting the same column. 

The function can be called as follows:


```python
encoded_data = me.encode_code_system_to_module(data, modules, output_col='my_module_number')
encoded_data
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>patientid</th>
      <th>code_system</th>
      <th>module_number</th>
      <th>my_module_number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>J15</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>B24</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>I50</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2</td>
      <td>F06</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>



Once the user have this column, it can be used in the model as it will have much less categories (dimensions), alternativlely it can be dummy encoded to binary variables or by other methods of encoding and won't cause much dispersity in the dataset.

### The fifth function `print_edge_list`

The function **`print_edge_list`** will save the the network's edgelist in a csv file in the same work directory. The funtion takes two arguments: 

- *G* (`nx.Graph`): the graph object (G) 
- The CSV filename (`pd.DataFrame`), example (edgelist.csv)

The function can be called as follows:


```python
print_edge_list = me.print_edge_list(G, "edgelist.csv")
```

    Edge list saved to file: edgelist.csv
    


```python
edgelist = pd.read_csv('edgelist.csv')
edgelist.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>source</th>
      <th>target</th>
      <th>weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B24</td>
      <td>J15</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>F06</td>
      <td>I50</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>



### The sixth function `assign_module`

The `assign_module` function maps a given code (or a list of codes) from the studied code system to its corresponding module. This function is especially useful when the user wishes to make new predictions and needs to find the corresponding encoding integer of a code in the code system.

#### Parameters:

- *codes* (`str`): The code(s) from the code system that the user wants to map to a module. These codes should exist in the original dataset.
- *modules* (`dict`): A dictionary containing mappings from codes to modules, generated from the function `detect_code_system_communities`.

#### Returns:

- If the code(s) exists in the dictionary, the function returns the corresponding module.
- If the code(s) does not exist in the dictionary, the function returns an appropriate error message indicating that the code is not present in the code-system-to-module mapping.

##### Assumptions 

- The function assumes that the code entered is a string value and that it presented in the code system to module mapping (i.e. the original dataset).

The function can be called as follows:


```python
# for one code 
code = "J15" # example
module_of_the_code = me.assign_module(code, modules) 
print('The module containig this code is module:',module_of_the_code)
```

    The module containig this code is module: 0
    


```python
# for multiple codes
codes = ["J15", "B24", "A11"] # example
module_of_the_codes = me.assign_module(codes, modules) 
print('The modules list containing these codes:',module_of_the_codes)
```

    The modules list containing these codes: [0, 0, "The entered code 'A11' is not present in the code system to module mapping."]
    

## User example
Here's a full example of how to use the **`modularity_encoding`** package:


```python
import modularity_encoding.functions as me
import pandas as pd

# import you dataset
data = pd.DataFrame({
    'patientid': [1, 1, 2, 2],
    'code_system': ['J15', 'B24', 'I50', 'F06']
})

# one function 
G, processed_data= me.modularity_encode(data, code_system_col='code_system', patientid_col='patientid', resolution=1.0, random_state=42, output_col='module_number')
# save the data with the new column
processed_data.to_csv('processed_data.csv', index=False)
# print or save the edgelist
me.print_edge_list(G, "edgelist.csv")

# Consecutive functions (must be run in this order)
# create the network 
G = me.create_code_system_network(data, code_system_col='code_system', patientid_col='patientid')

# detect the modules in the network 
modules = me.detect_code_system_communities(G, random_state=42,resolution=1) # change resolution if needed

# assign the codes of the targeted code system to their correponding module id 
encoded_data = me.encode_code_system_to_module(data, modules, output_col='my_module_number')

# print the data
print(data)

# print th network's edgelist  
print_edge_list = me.print_edge_list(G, "edgelist.csv")
# in case of implementing the function on other code system in the same dataset remember to specify the new "code_system_col" 
# and to change the "output_col" name. 

# To make new prediction the user can use this function to map the code in the code system to its correponding module
# map codes' modules to make new predictions
code = "J15"
module_of_the_code = me.assign_module(code, modules) 
print(module_of_the_code)

# for multiple codes
codes = ["J15", "B24", "A11"] # example
module_of_the_codes = me.assign_module(codes, modules) 
print('The modules list containing these codes:',module_of_the_codes)
```

    100%|██████████| 6/6 [00:00<?, ?it/s]
    

    Edge list saved to file: edgelist.csv
    

    100%|██████████| 6/6 [00:00<?, ?it/s]

       patientid code_system  module_number  my_module_number
    0          1         J15              0                 0
    1          1         B24              0                 0
    2          2         I50              1                 1
    3          2         F06              1                 1
    Edge list saved to file: edgelist.csv
    0
    The modules list containing these codes: [0, 0, "The entered code 'A11' is not present in the code system to module mapping."]
    

    
    

## FAQ

**1. What is this package used for?**

This package provides a set of functions to create a network from patient data, detect communities in the network, and encode the code systems to their corresponding module numbers. It can be used for analyzing patterns and relationships among different medical code systems in patient data.


**2. What are some common use cases for this package?**

The package can be used to group any code system that can be aggragted on a level (for example the patient level). It is especially useful for high-dimensional code systems such as the International Classification of Diseases (ICD) codes, Anatomical Therapeutic Chemical (ATC) codes, Diseases Related Group (DRG) codes in the health domain, Current Procedural Terminology (CPT) codes, and Systematized Nomenclature of Medicine (SNOMED) codes. 

**3. What is a code system?**

A code system is a standardized system of codes used to represent medical concepts, such as diagnoses, procedures, and medications. Examples of code systems include ICD-10, CPT, ATC, RxNorm, etc.

**4. What is a network?**

In the context of this package, a network is a graph representation of the relationships among different code systems based on the number of shared patients. Each code system is a node, and the number of shared patients between two code systems is the weight of the edge between them.

**5. What is a community in a network?**

A community in a network is a group of nodes that are more densely connected to each other than to the rest of the network. In the context of this package, a community represents a group of code systems that tend to co-occur in patients more frequently than with the other codes in the code systems.

**6. What is module encoding?**

Module encoding is the process of mapping each code system to its corresponding community module number. This allows for easier analysis and visualization of the relationships among code systems in the network.

**7. How do I install this package?**

The package can be installed using `pip` install. The package dependencies (see above) have to be installed as well.

**8. What format does the input data need to be in?**

The input data needs to be a Pandas DataFrame with columns for patient IDs and code systems. The column names for these two columns can be specified as arguments to the `create_code_system_network` function.

**9. What is the output of the `detect_code_system_communities` function?**

The output of this function is a dictionary that maps each code system to its corresponding community module number.

**10. What is an edge list?**

An edge list is a way of representing the edges (connections) between nodes (points) in a network. It is a table with three columns representing tha pair of nodes that are connected in the network and a third column representing the weight of the connections, which in this case is the number of patients who share the nodes. The edge list can be used to create a visualization of the network or to perform further analysis using other software tools.

**11. How do I save the network as an edge list?**

The `print_edge_list` function to save the network as an edge list in a CSV file in the same working directory. By default, the CSV file name is "edgelist.csv" but the name can be specified as an argument in the function.

**12. How can I implement other network measures on the created Netwrok?**

The created Network is a NetworkX object , which means that all measures implemented in NetworkX package can be applied on the created network by importing NetworkX.

**13. How can I visualize the network created by the `create_code_system_network` function?**

As mentioned, the function returns a NetworkX graph object, which can be visualized using the built-in plotting functions provided by the networkx and matplotlib libraries. You can also export the graph as an edge list using the print_edge_list() function and use external tools to create custom visualizations such as Gephi.

**14. How can I interpret the module numbers assigned by the `detect_code_system_communities` function?**

The `detect_code_system_communities` function uses the Louvain method to identify groups of related code systems based on their shared patients. Each module is assigned a unique integer label, which can be used to group code systems together for further analysis. The meaning of the module labels will depend on the specific dataset and application and the used code system.

**15. Can this package be used with data from any type of healthcare provider or system?**

Yes, as long as the data is in a format that can be read by Pandas and the necessary columns are included in the input data.

**16. Are there any limitations to the size of dataset that can be analyzed using this package?**

The size of the dataset that can be analyzed will depend on the hardware available and the specific use case. However, this package includes optimizations such as using `NetworkX` graphs to efficiently represent and analyze the data, and using `tqdm` library to display progress bars during processing.

**17.In case of making new predictions, how can I determine the assigned module for the code system?**

You can use the `assign_module` function to map the code to its correpoding module interger id (corresponds to the encdoing number of this code). The code entered must be a string value and must have been in the original dataset.




