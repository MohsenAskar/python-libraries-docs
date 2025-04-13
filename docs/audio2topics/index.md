# Overview

# `Audio2Topics` Package 🔊🗂️

[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Total downloads](https://static.pepy.tech/badge/audio2topics)](https://pepy.tech/projects/audio2topics?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=chart&versions)

![png](images\Audio2Topics_photo.png)

![svg](images\GUI.svg)

`Audio2Topics` is python packge that automizes topic extraction from voice files. The package is originally designed to aid researchers that performs interview research. Interview research typically incorporates a series of steps, starting from planning research questions, performing interviews, transcribing, and thorough manual text analysis to extract the main themes and topics of the transcribed text. This manual analysis phase is usually long and time-consuming. Additionally, the feasibility of manual analysis is limited by the volume of transcribed data.  `Audio2Topics` accelerating this step by automtically converting voice files of interviews into topics simply and effectively.

The application provides an end-to-end pipeline that handles:
- Audio transcription using OpenAI's Whisper
- Text preprocessing and cleaning
- Topic modeling with multiple algorithms
- Topic validation and optimization
- Advanced visualizations
- Model comparison and evaluation

Audio2Topics bridges the gap between audio content and text analysis, making topic discovery accessible to researchers, content creators, analysts, and anyone who needs to identify key themes in audio materials.

![Audio2Topics Main Interface](placeholder_for_main_interface_screenshot.png)
*The Audio2Topics main interface with its modular workflow tabs*

## Key Features

- **Automated Audio Transcription**: Convert audio files to text using state-of-the-art speech recognition
- **Advanced Text Processing**: Clean and normalize text with customizable preprocessing options
- **Multiple Topic Modeling Approaches**: Choose from BERTopic, LDA, and NMF algorithms
- **Interactive Topic Exploration**: Visualize and explore topics through multiple visualization techniques
- **Topic Quality Validation**: Assess topic coherence, diversity, and coverage
- **Topic Highlighting**: See how topics appear in original text with color highlighting
- **Model Comparison**: Compare different topic modeling approaches side by side
- **LLM Integration**: Enhance topic interpretability with AI-generated descriptions
- **Comprehensive Reporting**: Generate detailed reports with findings and visualizations


## Workflow Overview

The Audio2Topics application guides users through a structured workflow:

1. **Audio Transcription** → 2. **Text Processing** → 3. **Topic Modeling** → 4. **Validation & Visualization**

![Audio2Topics Workflow](placeholder_for_workflow_diagram.png)
*The end-to-end workflow of the Audio2Topics application*

### 1. Audio Transcription
The first step involves converting audio files to text using OpenAI's Whisper model:
- Upload audio files (MP3, WAV, M4A, FLAC)
- Select Whisper model size (tiny to large)
- Transcribe with automatic language detection
- Review and save transcriptions

### 2. Text Processing
The transcribed text is then prepared for topic modeling:
- Clean text by removing stopwords, special characters, etc.
- Apply stemming or lemmatization
- Process multiple documents simultaneously
- Analyze text statistics for quality assessment

### 3. Topic Modeling
The core functionality extracts topics from processed text:
- Choose from multiple algorithms (BERTopic, NMF, LDA)
- Configure parameters like number of topics and n-gram range
- Extract topics with adaptive processing for challenging data
- Refine topics with LLM-generated descriptions

### 4. Validation & Visualization
Finally, assess topic quality and explore results:
- Validate topics with coherence and diversity metrics
- Find the optimal number of topics for your data
- Create visualizations from word clouds to interactive topic maps
- Highlight topics in original text
- Compare different topic modeling approaches
- Generate reports for sharing and documentation

## Module Summary

Audio2Topics consists of several specialized modules, each handling a different aspect of the audio-to-topics pipeline:

### Audio Transcription Module
The transcription module converts audio files to text using OpenAI's Whisper speech recognition technology.
- **Key Components**: Transcriber class, TranscriberWorker, TranscriberTab
- **Features**: Multiple model sizes, GPU acceleration, language detection, batch processing
- [Detailed Transcriber Documentation](transcriber.md)

### Text Processing Module
The text processor prepares raw text for topic modeling through cleaning, normalization, and standardization.
- **Key Components**: TextProcessor class, TextProcessorWorker, ProcessorTab
- **Features**: Stopword removal, lemmatization, n-gram extraction, text statistics
- [Detailed Text Processor Documentation](text_processor.md)

### Topic Modeling Module
The topic modeler extracts meaningful topics from processed text using multiple algorithms and approaches.
- **Key Components**: TopicModeler class, TopicModelingWorker, TopicTab
- **Features**: BERTopic, NMF, and LDA algorithms, adaptive processing, LLM topic refinement
- [Detailed Topic Modeler Documentation](topic_modeler.md)

### Validation Module
The validator assesses topic quality and helps find the optimal topic model configuration.
- **Key Components**: TopicValidator class, ValidationWorker, OptimizationWorker, ValidatorTab
- **Features**: Coherence metrics, diversity assessment, topic count optimization
- [Detailed Validator Documentation](validator.md)

### Visualization Module
The visualizer creates static and interactive visualizations of text and topic data.
- **Key Components**: Visualizer class, VisualizationWorker, VisualizerTab
- **Features**: Word clouds, topic heatmaps, interactive visualizations, topic highlighting
- [Detailed Visualizer Documentation](visualizer.md)

### Comparison Module
The comparison tool enables side-by-side evaluation of different topic modeling approaches.
- **Key Components**: ComparisonTab class, TopicModelRun, ComparisonRunDialog
- **Features**: Multiple model runs, comparison visualizations, parameter impact analysis
- [Detailed Comparison Documentation](compare_models.md)

## Installation and Setup

### System Requirements
- Python 3.8 or higher
- 4GB RAM minimum (8GB+ recommended for larger models)
- NVIDIA GPU with CUDA support (optional, for faster processing)
- Internet connection for model downloads and API access

### Dependencies
Audio2Topics relies on several key libraries:
- PyQt5 for the user interface
- OpenAI Whisper for speech recognition
- NLTK and spaCy for text processing
- BERTopic, scikit-learn, and UMAP for topic modeling
- Matplotlib, seaborn, and wordcloud for visualizations
- OpenAI/Anthropic APIs for LLM integration (optional)

### Installation Steps

1. **Install the package**
   ```
   pip install audio2topics
   ```

2. **Install required language models**
   ```
   python -m spacy download en_core_web_sm
   python -m nltk.downloader punkt stopwords
   ```

3. **Configure API Keys (Optional)**
   - For LLM topic refinement, configure OpenAI or Anthropic API keys in the settings

4. **Launch the application**
   ```
   python -m audio2topics
   ```

## Use Cases

Audio2Topics serves a wide range of applications across different domains:

### Academic Research
- Analyze interview recordings for qualitative research
- Process lecture content to identify key themes
- Extract topics from academic presentations and symposia

### Business Intelligence
- Discover trends in customer support calls
- Analyze meeting recordings for key discussion points
- Process earnings calls and investor presentations

### Media Analysis
- Extract topics from podcast episodes
- Analyze broadcast interviews and discussions
- Identify themes in documentary content

### Personal Knowledge Management
- Process recorded notes and ideas
- Analyze personal audio journals
- Extract topics from recorded lectures or webinars

## Customization and Extension

Audio2Topics is designed to be extensible, allowing users to customize and enhance its functionality:

### Extending Topic Models
Add new topic modeling algorithms by:
1. Creating a new modeling method in `core/topic_modeler.py`
2. Adding the method to the UI options in `ui/topic_tab.py`
3. Implementing any specialized visualization in `core/visualizer.py`

### Custom Preprocessing
Implement custom text preprocessing steps by:
1. Adding new cleaning functions to `core/text_processor.py`
2. Exposing options in the `ui/processor_tab.py` interface

### API Integration
Integrate with additional services by:
1. Adding new API clients in `core/llm_service.py`
2. Updating the settings dialog in `ui/settings_dialog.py`

### Visualization Extensions
Create new visualization types by:
1. Adding visualization functions to `core/visualizer.py`
2. Exposing them in the `ui/visualizer_tab.py` interface

## Advanced Usage

### Command Line Interface
Audio2Topics provides a command-line interface for batch processing:

```
python -m audio2topics.cli --audio-dir /path/to/audio --output-dir /path/to/output --model medium
```

### Programmatic Usage
The core functionality can be used programmatically:

```python
from audio2topics.core.transcriber import Transcriber
from audio2topics.core.text_processor import TextProcessor
from audio2topics.core.topic_modeler import TopicModeler

# Transcribe audio
transcriber = Transcriber()
worker = transcriber.transcribe_files(audio_files, model_name="medium")
# ...handle signals to get transcriptions...

# Process text
processor = TextProcessor()
worker = processor.process_text(transcriptions, language="english")
# ...handle signals to get processed_docs...

# Extract topics
modeler = TopicModeler()
worker = modeler.extract_topics(processed_docs, method="bertopic")
# ...handle signals to get topics...
```

### Integration with Other Tools
Audio2Topics can be integrated with:
- Document management systems for content indexing
- Presentation tools for content summarization
- Knowledge management systems for information organization

## Troubleshooting

### Common Issues and Solutions

#### Audio Transcription
- **Issue**: Transcription fails to start
- **Solution**: Check internet connection, try a smaller model size, ensure sufficient disk space

#### Text Processing
- **Issue**: Many stopwords in processed text
- **Solution**: Adjust language setting, add custom stopwords, check preprocessing settings

#### Topic Modeling
- **Issue**: "Dimensionality error" with BERTopic
- **Solution**: Enable adaptive processing, try BERTopic-PCA or NMF instead

#### Validation
- **Issue**: Low coherence scores
- **Solution**: Try different preprocessing, adjust number of topics, try another algorithm

#### Visualization
- **Issue**: Interactive visualization not loading
- **Solution**: Check if the model type matches the visualization type, try a different visualization

### Performance Optimization
- Use smaller Whisper models (base/small) for faster transcription
- Process documents in smaller batches for memory efficiency
- Use GPU acceleration when available
- Save models and results for reuse

## Best Practices

### Audio Recording Quality
- Use clear recordings with minimal background noise
- Ensure adequate volume levels
- Use lossless formats when possible

### Document Preparation
- Split long recordings into shorter segments
- Group related content into meaningful documents
- Remove irrelevant sections before processing

### Topic Modeling Strategy
1. Start with a small subset of documents to test different approaches
2. Use the Comparison tab to identify the best method for your data
3. Validate topic quality before drawing conclusions
4. Use LLM refinement for clearer topic interpretations
5. Combine quantitative metrics with human judgment

### Reporting and Sharing
- Export visualizations in appropriate formats for your audience
- Include topic words and example documents in reports
- Provide context for topics through LLM-generated descriptions
- Use interactive formats (HTML) for detailed exploration

## Glossary

- **BERTopic**: Topic modeling algorithm that leverages BERT embeddings
- **Coherence**: Measure of how semantically related the words within a topic are
- **Diversity**: Measure of how distinct topics are from each other
- **Elbow Method**: Technique for finding the optimal number of topics
- **LDA**: Latent Dirichlet Allocation, a probabilistic topic modeling method
- **Lemmatization**: Process of reducing words to their base or dictionary form
- **N-gram**: Contiguous sequence of n items from a text sample
- **NMF**: Non-negative Matrix Factorization, a topic modeling algorithm
- **Stopwords**: Common words that are filtered out during text processing
- **UMAP**: Uniform Manifold Approximation and Projection, a dimensionality reduction technique
- **Whisper**: OpenAI's speech recognition model for audio transcription

## References and Resources

### Underlying Technologies
- [OpenAI Whisper](https://github.com/openai/whisper)
- [BERTopic](https://github.com/MaartenGr/BERTopic)
- [spaCy](https://spacy.io/)
- [scikit-learn](https://scikit-learn.org/)
- [PyQt](https://riverbankcomputing.com/software/pyqt/)


## License

Released under the MIT License: For more details, see the `LICENSE` file.
Copyright (C) 2024 **`stata_codebook`**

Developed by: Mohsen Askar <ceaser198511@gmail.com>

!!! quote "Citation"
    If you use Stata Codebook in your research, please cite:
    ```bibtex
    @software{stata_codebook2024,
        title = {AssumptionSheriff: A Python Package for Statistical Assumption Checking},
        author = {Mohsen Askar},
        e-mail = {ceaser198511@gmail.com},
        year = {2024},
        url = {https://pypi.org/project/stata_codebook/}
    }
    ```
