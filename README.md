# 🌾 ZyncKrishi Multilingual Dataset (Optimized via Adaption Labs)

## 🚀 Project Overview
ZyncKrishi is an enterprise-grade, hyper-local agricultural intelligence platform built to assist Indian farmers with real-time crop disease diagnosis and personalized farming recommendations. This dataset powers the core LLM backend, allowing accurate responses across multiple regional languages including **Hindi, Marathi, and English**.

---

## 📊 Dataset Transformation Metrics (Before vs After)

We utilized the **Adaption Labs Data Pipeline** to transform an unoptimized, raw baseline dataset into a production-grade instruction tuning asset.

| Metric | Baseline Dataset (Before) | Optimized Dataset (After) | Change (%) |
| :--- | :--- | :--- | :--- |
| **Dataset Size** | 150 Rows | **240 Rows** (Expanded to 11,200+ for Fine-Tuning) | +60% (Initial Expansion) |
| **Quality Score**| 4.0 / 10.0 | **7.8 / 10.0** | **+95.0% Relative Improvement** |
| **Quality Grade**| **Grade D** | **Grade B** | Huge Quality Leap 🚀 |
| **Localization** | Raw English/Mixed | **Hyper-Local Indian English, Hindi, Marathi, Telugu** | Fully Regionalized |

---

## 🛠️ Optimization Recipes Applied

1. **Reasoning Traces (Chain-of-Thought):** Injected deep reasoning and logical step-by-step thinking processes into the completions to prevent flawed diagnostics.
2. **Hallucination Mitigation:** Configured strict safety alignment toggles to filter out misleading or unverified agricultural advice.
3. **Multilingual Diversity Expansion:** Adapted the dataset into major regional dialects (Hindi & Marathi) to ensure seamless communication with local farming communities in Maharashtra and North India.

---

## 🤖 Downstream Model Fine-Tuning
The optimized dataset was pushed into the **AutoScientist Engine** to execute **LoRA (Low-Rank Adaptation)** Fine-Tuning on the frontier model **`mistralai/Mixtral-8x7B-Instruct-v0.1`** (46.7B parameters), establishing a highly domain-specific conversational assistant for agricultural tech.

---

## 📁 Repository Structure
* `ZyncKrishi_Optimized.csv` / `dataset.json` - The core high-quality adapted dataset.
* `README.md` - Dataset documentation and performance telemetry.    

---

---

## 📂 Open-Source Datasets

As part of our commitment to open-source agricultural AI and the hackathon submission requirements, the optimized ZyncKrishi datasets are publicly available for research and community use:

* 📊 **Kaggle:** [ZyncKrishi Multilingual Agri-QA Dataset](https://www.kaggle.com/datasets/mohammedkhan7/zynckrishi-multilingual-agri-qa-dataset)
* 🤗 **Hugging Face:** [ZyncKrishi-Agriculture-Dataset](https://huggingface.co/datasets/Mohammed654/ZyncKrishi-Agriculture-Dataset)

*(Note: These datasets have been processed and localized specifically for Indian agricultural contexts).*
