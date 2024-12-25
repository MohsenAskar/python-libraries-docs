## Summary

[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The **`modularity_encoding`** package provides functionality for grouping high dimensional Health Coding Systems (HCSs). In the medical domain, these code systems can be challenging to handle in big datasets while implementing machine learning model for classification or prediction purposes. Examples of these code systems are International Classification of Diseases (ICD) codes, Anatomical Therapeutic Chemical (ATC) codes, Diseases Related Group (DRG) codes, etc. These code systems include thousands of codes and binarizing them in many columns will greatly increase the sparsity of the dataset leading to worse model performances. More specifically, the package includes functions for creating a network of code systems on the co-occurrences of the code systems codes in the dataset population, then, detecting communities(modules) within the network. These modules are a way to group the codes in a clinically-relevant and data-driven way. After that, the package provide a new column which assigns the code system codes to their corresponding community modules. By this way, the model dimensions will be significantly reduced  form thousands to a handful number of dimensions.


## Key Features
- **Network Creation**: The package creates a network from the HCSs codes based on their co-occurrences within a dataset.
- **Community Detection**: It identifies communities (or modules) within the network. These communities group the HCSs codes in a way that is both clinically relevant and data-driven, enhancing the interpretability and utility of the codes.
- **Dimensionality Reduction**: By assigning codes to their respective community modules, **`modularity_encoding`** significantly reduces the dimensionality of the data—from potentially thousands of columns to just a few. This reduction helps in managing dataset sparsity and improving model performance.