# Visualization Module

## Overview

The Visualization module enables you to create interactive and static visualizations of your text data and topic models. It provides a comprehensive suite of visualization tools that help you understand document content, explore word patterns, and interpret topic modeling results through visual representations.

This module allows you to:
- Generate word clouds and frequency charts to visualize key terms
- Analyze n-gram patterns to identify common phrases
- Explore topic distributions across your document collection
- Visualize topic keywords and their importance
- Highlight topic patterns directly in original texts
- Create interactive visualizations for deep exploration of topic models
- Export visualizations for presentations and reports

Visualizations make complex text and topic data more accessible, helping to communicate insights effectively and discover patterns that might be missed in raw data.

*Main interface of the Visualizer Tab*

![png](images\visualizer1.png)
![png](images\visualizer2.png)


## Core Components

### Visualizer Class

The `Visualizer` class serves as the main interface for visualization functionality, managing the generation of visualizations using worker threads.

#### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `generate_visualization()` | Starts generation of a visualization in a worker thread | `viz_type`: Type of visualization to generate<br>`data`: Data for the visualization<br>`**kwargs`: Additional parameters | Returns the worker thread that can be connected to signals |
| `highlight_topics_in_documents()` | Highlights topics in original text documents | `documents`: List of document strings<br>`topic_model`: Topic model<br>`topic_ids`: List of topic IDs to highlight<br>`colors`: List of colors for each topic | List of HTML strings with highlighted topics |
| `get_available_visualizations()` | Returns available visualization types | None | Dictionary mapping visualization names to their types |
| `save_figure()` | Saves a figure to a file | `fig`: Matplotlib figure<br>`filename`: Output filename<br>`dpi`: Resolution | Boolean indicating success |
| `figure_to_bytes()` | Converts a figure to bytes for embedding | `fig`: Matplotlib figure<br>`format`: Output format<br>`dpi`: Resolution | Bytes containing the image data |

### VisualizationWorker Class

The `VisualizationWorker` class extends `QThread` to handle visualization generation in a background thread, keeping the UI responsive.

#### Signals

| Signal | Description | Parameters |
|--------|-------------|------------|
| `progress_updated` | Emitted to update progress | `int`: progress percentage, `str`: status message |
| `visualization_completed` | Emitted when visualization is done | `object`: Figure object or tuple with figure and HTML |
| `error_occurred` | Emitted when an error occurs | `str`: error message |

## Visualization Types

The module provides various visualization types for different analytical purposes:

### Text-Based Visualizations

#### Word Cloud
Generates a visual representation of word frequency where word size corresponds to frequency.


#### Word Frequency
Creates a horizontal bar chart showing the most frequent words in the documents.

#### N-grams Analysis
Visualizes the most common phrases (word sequences) in the documents.

### Topic-Based Visualizations

#### Topic Distribution
Shows how documents are distributed across topics using a bar chart.

#### Topic Keywords
Visualizes the most important words for each topic in a grid of bar charts.

#### Topic Heatmap
Creates a heatmap showing document-topic assignments, where color intensity represents probability.

#### Topic Highlighting
Highlights topics directly in the original text documents using colored spans.

### Interactive Visualizations

#### pyLDAvis (LDA Visualization)
Creates an interactive visualization for LDA topic models using the pyLDAvis library.

#### BERTopic Visualization
Creates an interactive visualization for BERTopic models showing topic relationships.

## User Interface

The `VisualizerTab` class provides a comprehensive interface for creating, viewing, and saving visualizations.

### UI Components

- **Visualization Controls**:
  - Visualization type dropdown
  - Parameter configuration section (changes based on selected visualization)
  - Generate and Save buttons
  
- **Visualization Display**:
  - Tabs for static and interactive views
  - Canvas with toolbar for static visualizations
  - Web view for interactive visualizations
  
- **Topic Highlighting Dialog**:
  - Topic selection with color indication
  - Document navigator for exploring highlighted content
  - Legend showing topic colors and keywords


## Usage Guide

### Creating Visualizations

1. Select a visualization type from the dropdown menu
2. Configure the visualization parameters (if applicable)
3. Click "Generate Visualization" to create the visualization
4. The visualization will appear in the main viewing area
5. Interactive visualizations will appear in the "Interactive View" tab

### Customizing Visualizations

Each visualization type offers specific customization options:

#### Word Cloud
- **Language**: Select the text language for better processing
- **Color Scheme**: Choose from various color palettes

#### Word Frequency
- **Number of Words**: Set how many top words to display
- **Language**: Select the text language

#### N-grams Analysis
- **N-gram Size**: Set the size of word sequences (2=bigrams, 3=trigrams)
- **Number of N-grams**: Set how many top phrases to display
- **Language**: Select the text language

#### Topic Keywords
- **Words per Topic**: Set how many words to show for each topic
- **Color Scheme**: Choose from various color palettes

#### Topic Highlighting
- **Select Topics**: Choose which topics to highlight
- **Color Scheme**: Select a color palette for topic differentiation

#### Interactive LDA
- **MDS Algorithm**: Choose between t-SNE and PCoA for dimensionality reduction

#### BERTopic Visualization
- **Number of Topics**: Set how many topics to include in the visualization

### Navigating Visualizations

The interface provides several tools for exploring visualizations:

- **Zoom and Pan**: Use the toolbar below visualizations to zoom in/out and pan
- **Reset View**: Click the home button in the toolbar to reset the view
- **Interactive Elements**: For interactive visualizations, click on elements for details
- **Smooth Scrolling**: Scroll smoothly through large visualizations with optimized controls

### Saving Visualizations

1. Click "Save Visualization" to export your visualization
2. For static visualizations (word clouds, charts, etc.):
   - Choose from PNG, JPEG, PDF, or SVG formats
   - Set the filename and location
3. For interactive visualizations (pyLDAvis, BERTopic):
   - Save as HTML for interactive viewing in any web browser
   - The HTML file contains the complete interactive visualization

## Visualization Selection Guide

| Visualization Type | Best Used For | Requirements |
|-------------------|---------------|--------------|
| Word Cloud | Quick overview of key terms, presentations | Text documents |
| Word Frequency | Precise word frequency analysis | Text documents |
| N-grams | Identifying common phrases and expressions | Text documents |
| Topic Distribution | Understanding topic prevalence | Topic model results |
| Topic Keywords | Interpreting topic meaning | Topic model results |
| Topic Heatmap | Analyzing document-topic relationships | Topic model results |
| Topic Highlighting | Validating topics in original context | Topic model and documents |
| Interactive LDA | Deep exploration of LDA topic models | LDA topic model |
| BERTopic Visualization | Interactive exploration of BERTopic models | BERTopic model |

## Tips for Effective Visualization

### General Visualization Tips

1. **Choose the right visualization** for your specific analytical goal
2. **Use consistent color schemes** across related visualizations
3. **Balance detail and clarity** - sometimes less information is more effective
4. **Consider your audience** - simpler visualizations for non-technical viewers
5. **Combine multiple visualization types** for comprehensive understanding

### Word-Based Visualizations

- Remove common stopwords before visualization for clearer results
- For technical content, preserve domain-specific terms
- Compare n-grams with single words to capture multi-word concepts
- Consider stemming or lemmatization for more concise visualizations

### Topic-Based Visualizations

- Exclude outlier topics (-1) for cleaner visualizations
- Use topic highlighting to validate model quality in original text
- Compare topic distribution with topic coherence metrics
- Use LLM-refined topic labels for more interpretable visualizations

### For Presentations

- Word clouds and simple bar charts are most accessible to general audiences
- Use consistent color coding across visualizations for topics
- Include examples of highlighted text to show topics in context
- Save as high-resolution images (300 DPI or higher) for print materials

## Technical Notes

### Smooth Scrolling and Performance

The interface includes optimizations for smooth performance:

- **Pixel-based scrolling** for smoother navigation
- **Reduced scroll sensitivity** for finer control
- **Optimized rendering** for large visualizations
- **Hardware acceleration** when available

### Model Compatibility

- **pyLDAvis** works best with LDA models but can display warnings with others
- **BERTopic visualizations** require a BERTopic model with embedding data
- **Topic highlighting** works with all model types but with varying accuracy

### File Formats

When saving visualizations, different formats offer different advantages:

- **PNG**: Good general-purpose format, suitable for presentations
- **JPEG**: Smaller file size but lower quality for text
- **PDF**: Vector format, excellent for publication
- **SVG**: Vector format, good for further editing
- **HTML**: Required for interactive visualizations