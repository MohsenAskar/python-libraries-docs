
## Dependencies
The **`modularity_encoding`** package relies on some external libraries, which need to be installed first:

- `pandas`: Used for handling and manipulating the dataset.
- `networkx`: Facilitates the creation and manipulation of complex networks of code systems.
- `itertools`: Helps in efficient looping for combinations and permutations needed in module detection.
- `python-louvain`: Essential for detecting communities within the network.
- `tqdm`: Provides progress bars to loops to visualize the computation time.
- `matplotlib`: Required for plotting networks and other visualizations to understand the data better.


## Installation
The **`modularity_encoding`** package can be installed using `pip`:


```python
!pip install modularity_encoding==0.1
```

## Importing
The package is imported as follows:


```python
import modularity_encoding.functions as me
```