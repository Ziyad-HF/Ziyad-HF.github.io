// =====================================================================
// content.js — the ONLY file you need to edit to change the website text.
// Every fact here comes from Ziyad's master resume and LinkedIn (Nov 2026).
// =====================================================================
window.SITE = {
  name: "Ziyad ElFayoumy",
  short: "Z.EF",
  role: "Graduate Research Fellow · University of Alberta",
  headline: "Medical & Transportation AI Researcher",
  tagline:
    "I build computer vision and multimodal systems wherever AI can make a real difference, whether that's analyzing autistic behaviours in healthcare or monitoring road conditions in transportation.",
  location: "Edmonton, Alberta, Canada",
  photo: "../shared/assets/profile.jpg",
  links: {
    email: "ziyad.h.elfayoumy@gmail.com",
    linkedin: "https://www.linkedin.com/in/ziyad-el-fayoumy/",
    github: "https://github.com/Ziyad-HF",
    lab: "https://sites.google.com/ualberta.ca/drtaejkwon/people/People/ziyad-hossam-elfayoumy?authuser=0",
    resume: "" // add the PDF path here later, e.g. "../shared/assets/Ziyad_ElFayoumy_Resume.pdf"
  },

  stats: [
    { value: "200k+", label: "winter road images analysed in my thesis", href: "#work" },
    { value: "TRB 2027", label: "paper accepted for presentation, Jan 2027", href: "#work" },
    { value: "1st", label: "of 259 projects, Dell Envision the Future 2025", href: "#recognition" },
    { value: "21", label: "research & technical projects", href: "#projects" }
  ],

  about: [
    "I'm an AI engineer who builds computer vision and multimodal systems wherever AI can make a real difference, whether that's analyzing autistic behaviours in healthcare or monitoring road conditions in transportation. I enjoy the full path from raw, messy data to a model that people can trust and use.",
    "I'm currently pursuing an M.Sc. in Transportation Engineering at the University of Alberta as a Graduate Research Fellow, where I apply computer vision to dashcam images to understand winter road surface conditions.",
    "Before Edmonton, I earned a B.Sc. in Systems and Biomedical Engineering from Cairo University. For my graduation project, I helped build a multimodal AI platform for early autism detection that combines behaviour, gaze, and speech models; it won 1st place out of 259 projects in Dell Technologies' Envision the Future competition. I also enhanced C++ tooling for QuestaSim at Siemens EDA, interned at Siemens Healthineers, and attended Westlake University's Frontiers of Life Sciences summer school.",
    "Across these projects, I've worked with Vision Transformers, segmentation and detection models, vision-language and speech models, and the software around them: PyTorch, Python, C++, Django, and React. I care as much about data quality and honest evaluation as about model accuracy."
  ],

  focus: ["Computer Vision", "Medical AI", "Transportation AI", "Data-Centric AI", "Multimodal Learning"],

  education: [
    { school: "University of Alberta", degree: "M.Sc. in Transportation Engineering (Thesis-Based)", dates: "Jan 2026 – Present", place: "Edmonton, Canada" },
    { school: "Cairo University", degree: "B.Sc. in Systems and Biomedical Engineering · GPA 3.7/4", dates: "Sep 2020 – Jul 2025", place: "Cairo, Egypt" }
  ],

  thesis: {
    title: "Vision-Based Monitoring of Winter Road Conditions and Maintenance Performance",
    note: "Working title",
    lab: "GeoTrans Lab, University of Alberta · Supervisor: Dr. Tae J. Kwon",
    dates: "Jan 2026 – Present",
    image: "../shared/assets/geotrans.jpg",
    imageAlt: "GeoTrans Lab team at the University of Alberta",
    story: "Can a dashcam tell us how well winter roads are being cleared? I'm teaching AI to read images taken on Edmonton's roads, judge how snow-covered each road is, and measure how quickly roads become safe again after a snowstorm, compared with municipal service standards.",
    plain: [
      "Reads road conditions from 200k+ winter images: bare, partly or fully snow-covered.",
      "Builds trustworthy data first, by removing repeated images and fixing wrong labels.",
      "Places every image on its exact road and links it to the weather that day.",
      "Shows how fast roads are cleared after each storm."
    ],
    points: [
      "Building a pipeline that classifies road surface condition (bare, partly, or fully snow-covered) from 200k+ winter dashcam images, combined with road segmentation and snow-coverage estimation.",
      "Applying data-centric quality control (near-duplicate detection, trip-aware data splits, and confident-learning label review) to improve label reliability.",
      "Linking image-level predictions to the road network through GPS map matching and to weather records, producing condition timelines for each road segment before and after snowstorms.",
      "Evaluating how quickly roads return to bare pavement after snowfall, measured against winter maintenance service standards."
    ]
  },

  publications: [
    {
      authors: "ElFayoumy, Z., et al.",
      title: "Data-Centric Quality Control for Reliable Winter Road Surface Condition Classification from Dashcam Imagery",
      status: [
        "Accepted for presentation at the Transportation Research Board (TRB) Annual Meeting, January 2027.",
        "Submitted to the Canadian Journal of Civil Engineering, under review (Nov 2026)."
      ],
      plain: "Before you trust an AI model, you need to trust its data. This paper shows a practical way to clean up road-condition images so the AI's results can be relied on.",
      summary: "Proposes a quality-control pipeline (near-duplicate removal, trip-aware spatial splitting, and confident-learning label cleaning) for classifying winter road surface conditions from dashcam images."
    }
  ],

  experience: [
    {
      org: "University of Alberta", role: "Graduate Research Fellow", story: "Turning dashcam images into clear answers about winter road safety, from building the data to training and running AI models at scale.", plain: ["Research in the GeoTrans Lab with Dr. Tae J. Kwon on AI for safer winter roads."], dates: "Jan 2026 – Present", place: "Edmonton, Canada",
      points: ["Develop AI and computer vision models in the GeoTrans Lab (supervisor: Dr. Tae J. Kwon) for winter road monitoring, from data pipelines and model training to large-scale inference on HPC."],
      link: "https://sites.google.com/ualberta.ca/drtaejkwon/people/People/ziyad-hossam-elfayoumy?authuser=0"
    },
    {
      org: "Kasr Al Ainy, Cairo University", role: "Medical AI Researcher (Part-time)", story: "Building AI that supports neurosurgeons' decisions for patients with lower-back spine conditions: spotting problems on MRI scans and estimating how each patient is likely to respond to different treatments.", plain: ["Leads the AI side of two neurosurgery doctoral (MD) research projects at Cairo University's medical school.", "Set up the tools neurosurgeons used to mark findings on MRI scans.", "Learns from patient records (symptoms, pain levels, examination and scan findings, the treatment chosen, and recovery) to predict improvement and complications for each treatment option.", "Works in review cycles with the clinical team, on-site at first and remotely since 2026."], dates: "Oct 2025 – Present", place: "Cairo, Egypt · On-site, then remote",
      points: [
        "Lead the AI work for two neurosurgery MD theses on degenerative lumbar spine disease at the Department of Neurosurgery, under Prof. Mohamed Mohi Eldin.",
        "Set up annotation tools on the lab's workstations, used by neurosurgery experts to label lumbar MRI images.",
        "Built outcome-prediction models (XGBoost, Random Forest) on 448 patients and 300+ clinical features to predict improvement and complications under each treatment option.",
        "Trained YOLOv8 models to detect six lumbar spine findings (e.g., disc prolapse, canal stenosis, spondylolisthesis) on axial and sagittal MRI."
      ]
    },
    {
      org: "Westlake University", role: "Frontiers of Life Sciences Research Trainee", story: "One of 47 students chosen from 1,100+ applicants worldwide for a life-sciences summer school in Hangzhou, China.", plain: ["Selected from 1,100+ applicants across 23 countries.", "76 hours of lectures, workshops and lab visits with 24 professors in neuroscience, molecular biology, cancer research and biotechnology."], dates: "Jul 2025 – Aug 2025", place: "Hangzhou, China",
      points: [
        "Selected as one of 47 international students from 23 countries (1,100+ applicants) for the International Undergraduate Summer School.",
        "Completed 76 hours of lectures, workshops, and lab visits led by 24 professors in neuroscience, molecular biology, cancer research, and biotechnology."
      ],
      link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_westlakeuniversity-lifesciences-neuroscience-activity-7361130291937107968-oru4"
    },
    {
      org: "Siemens EDA", role: "Software Engineer Intern", story: "Improved a software tool inside Siemens' chip-verification product, QuestaSim, making it faster and easier to use.", plain: ["Worked on a feature of a new QuestaSim release, used by chip designers worldwide."], dates: "Aug 2024 – Sep 2024", place: "Cairo, Egypt",
      points: ["Enhanced the Design Packager tool in C++ for the new QuestaSim release, optimizing performance and usability."],
      link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_im-happy-to-share-that-im-starting-a-new-activity-7225115553277833217-d0JT/"
    },
    {
      org: "Siemens Healthineers", role: "Field Services Engineer Intern", story: "Trained on medical imaging and lab systems, then joined real service calls with field engineers, including replacing a CT scanner's X-ray tube at Kasr Al Ainy Hospital.", plain: ["65 hours of training on diagnostic imaging and laboratory systems.", "Joined engineers on maintenance and calibration visits to hospitals, including a CT scanner X-ray tube replacement."], dates: "Jul 2024 – Aug 2024", place: "Cairo, Egypt",
      points: [
        "Completed a 65-hour service training on diagnostic imaging and laboratory systems at Siemens Healthineers, then joined field engineers on maintenance and calibration service calls at client hospitals.",
        "Took part in replacing the X-ray tube of a CT scanner in the CT unit at Kasr Al Ainy Hospital."
      ],
      link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_biomedicalengineering-studentproject-siemenshealthineers-activity-7199490806997520384-tlu0"
    },
    {
      org: "Dar Al Fouad Hospital", role: "Clinical Engineer Intern", story: "Hands-on clinical engineering: rotating through hospital departments, calibrating devices such as infusion pumps and blood pressure monitors, and answering equipment calls.", plain: ["Rotated through radiology, intensive care, laboratories, operating rooms and dialysis.", "Calibrated infusion pumps and blood pressure monitors and answered equipment calls from staff."], dates: "Aug 2023 – Sep 2023", place: "Cairo, Egypt",
      points: [
        "Rotated through hospital departments (radiology, intensive care, laboratories, operating rooms, dialysis) working with their medical equipment.",
        "Calibrated infusion pumps and blood pressure monitors with the department's calibration analyzers.",
        "Responded to equipment service calls from medical staff across hospital departments."
      ],
      link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_clinicalengineering-internship-activity-7126629877369217024-oaBf"
    }
  ],

  // categories: transport, health, vision, software, research
  projects: [
    {
      title: "Calibrated Wildfire Building-Damage Assessment", pitch: "After a wildfire, which homes are destroyed? AI sorts most buildings from satellite images in minutes and sends the uncertain ones to a human inspector, so experts spend their time where it matters.", plainResult: "On the 2025 Eaton Fire in Los Angeles, about 9 in 10 buildings could be labelled automatically while missing only 1–3% of destroyed homes.", featured: true, image: "../shared/assets/wildfire.jpg", imageFit: "contain", imageAlt: "Map of the 2025 Eaton Fire: buildings auto-labelled correctly (blue), routed to an inspector (green) and errors (orange), from one model run",
      meta: "Course research project (team of 3) · CIV E 779 · Fall 2026", cats: ["research", "vision"],
      desc: "Classified building damage from pre/post-fire satellite imagery (xBD), testing on wildfires held out from training and on the 2025 Eaton Fire against CAL FIRE field-inspection records. Compared a Siamese ConvNeXt, a zero-shot vision-language model (Qwen3-VL-8B), and the same model fine-tuned with LoRA, then added calibration and conformal prediction to route uncertain buildings to inspectors.",
      result: "On the Eaton Fire, 91–93% of buildings could be labelled automatically while missing 1–3% of destroyed homes; the analysis also shows where this guarantee fails on dissimilar fires.",
      tags: ["ConvNeXt", "Qwen3-VL", "LoRA", "Conformal Prediction"], link: "https://github.com/Ziyad-HF/WildfireDamageCP"
    },
    {
      title: "Multimodal AI-based Autism Detection Platform", pitch: "An AI platform that helps clinicians spot early signs of autism by looking at a child's behaviour, eye gaze and speech, then turning it into an easy-to-read report.", plainResult: "1st of 259 projects in Dell Technologies' Envision the Future, funded by an ITIDA grant, and featured on BBC Arabic, Al-Mehwar TV and Al-Ahram.", featured: true, image: "../shared/assets/dell-win.jpg", imageAlt: "The team after winning Dell Technologies' Envision the Future competition",
      meta: "Graduation project · Sep 2024 – Jul 2025", cats: ["health", "vision"],
      desc: "AI-powered platform for early autism detection integrating six specialized models: MViT-v2 for behaviour recognition, Gaze-LLE with DINOv2 for gaze tracking, PaliGemma with Whisper & CoNeTTE for audiovisual analysis, and MediaPipe & DeepFace for socio-emotional cues, behind a bilingual Django + React interface with clinician-friendly reports.",
      result: "1st place in Dell Technologies' Envision the Future competition; featured on BBC Arabic (4Tech), Al-Mehwar TV, and Egyptian national press.",
      tags: ["PyTorch", "MViT-v2", "DINOv2", "Whisper", "Django", "React"], link: "https://github.com/Ziyad-HF/Multimodal-Autism-Platform"
    },
    { title: "Asthma Rate Prediction using Traffic Data", pitch: "Does traffic affect asthma? Mapped Edmonton's traffic against asthma rates to look for a link.", meta: "GIS project", cats: ["transport"], desc: "Linear regression model predicting asthma rates in Edmonton from traffic density and road-network GIS data, with spatial preprocessing, feature engineering, and GIS mapping of the results.", tags: ["GIS", "Regression", "Spatial Data"] },
    { title: "Exploring Cognitive Control via fMRI Analysis", pitch: "Analysed brain scans to study how people stay focused and ignore distractions.", meta: "Research project", cats: ["research", "health"], desc: "Analyzed the Flanker dataset: preprocessing, quality control, first-level and higher-level statistical analysis.", tags: ["fMRI", "Neuroimaging", "Statistics"], link: "https://github.com/Ziyad-HF/Exploring-Cognitive-Control-through-fMRI-Analysis" },
    { title: "Climate Change Modeling with PDEs", pitch: "A mathematical model that simulates climate change, presented at a university research forum.", meta: "Math research · TCCD Research Forum, Dec 2022", cats: ["research"], desc: "Mathematical model using partial differential equations, focusing on the Navier-Stokes equation, to simulate climate change.", tags: ["PDEs", "Navier-Stokes", "Modeling"], link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_late-is-better-than-never-this-the-2nd-activity-7109793299833454592-NgYA" },
    { title: "FitMate: AI-Powered Fitness Trainer", pitch: "A personal trainer on your screen: counts your reps and gives feedback on your form in real time.", meta: "Computer vision", cats: ["vision", "software"], desc: "Real-time exercise feedback, tracking, analysis, and rep counting from a camera feed.", tags: ["OpenCV", "MediaPipe", "PyQt5"], link: "https://github.com/Ziyad-HF/FitMate" },
    { title: "Pandora BCI: EEG Movement Prediction", pitch: "Predicts intended hand movements from brain signals, for brain–computer interfaces.", meta: "Deep learning", cats: ["health"], desc: "Deep learning model predicting patient movements from EEG data (WAY-EEG-GAL dataset), deployed on a Flask server with a desktop app.", tags: ["Deep Learning", "EEG", "Flask"], link: "https://github.com/Ziyad-HF/PandoraBCI" },
    { title: "VisionVerse", pitch: "A desktop toolkit of classic image tools: edge finding, segmentation and face recognition.", meta: "Computer vision algorithms", cats: ["vision", "software"], desc: "Desktop applications for image processing: edge detection, feature extraction, segmentation, and face recognition.", tags: ["Image Processing", "Segmentation"], link: "https://github.com/Ziyad-HF/VisionVerse" },
    { title: "CT Toolkit", pitch: "Rebuilds CT scan images from raw data and lets you explore them visually.", meta: "Medical imaging", cats: ["health", "software"], desc: "CT reconstruction tool with visualization features.", tags: ["CT", "DICOM", "PyQt5"], link: "https://github.com/Ziyad-HF/CT-Toolkit" },
    { title: "MammoCLAHE", pitch: "Tested whether boosting mammogram contrast helps AI read them better.", meta: "Medical imaging", cats: ["health", "vision"], desc: "Simulated contrast enhancement on mammograms and evaluated its effect with a CNN model.", tags: ["Mammography", "CNN"], link: "https://github.com/Ziyad-HF/MammoCLAHE" },
    { title: "Ultrasound Beam Simulation", pitch: "Simulates how ultrasound beams travel from modern phased-array probes.", meta: "Team project", cats: ["health"], desc: "Ultrasound beam simulation tools for phased-array systems.", tags: ["MATLAB", "Python", "PyMust"], link: "https://github.com/omarshaban02/Phased-Array-Pressure-Fields" },
    { title: "Fat-Water Separation (Dixon Algorithm)", pitch: "Separates fat from water in heart MRI scans to make them clearer.", meta: "MRI", cats: ["health"], desc: "Streamlit app for MRI fat suppression using the Dixon algorithm, producing water-only and fat-only images.", tags: ["MRI", "Streamlit"], link: "https://github.com/Ziyad-HF/Fat-Water-Suppression-For-Heart" },
    { title: "FaceX: Face Recognition System", pitch: "Finds faces in photos and estimates age, gender and emotion.", meta: "Team project", cats: ["vision"], desc: "Detects faces, eyes, and smiles, with age, gender, and emotion classification.", tags: ["Viola-Jones", "DeepFace", "PCA"], link: "https://github.com/omarshaban02/Face-Recognition-System" },
    { title: "News Classifier", pitch: "Spots fake news articles; placed 3rd in a Kaggle competition.", meta: "NLP · 3rd place, STP Level Up 3.0", cats: ["software"], desc: "Decision tree model for fake news detection, built for a Kaggle competition.", tags: ["NLP", "Machine Learning"], link: "https://github.com/Ziyad-HF/News-Classifier" },
    { title: "Thyroid Cancer Recurrence Prediction", pitch: "Estimates the risk of thyroid cancer coming back after treatment.", meta: "Healthcare ML", cats: ["health"], desc: "Ensemble model (SVM, Decision Trees, Random Forests, KNN, ANN) to predict thyroid cancer recurrence.", tags: ["Ensemble Learning"], link: "https://github.com/Ziyad-HF/Thyroid_Cancer_Risk" },
    { title: "Cancer Mortality Rates Model", pitch: "Explores how income and social factors relate to cancer deaths.", meta: "Data science", cats: ["health"], desc: "Analyzed the correlation between socioeconomic status and cancer mortality rates.", tags: ["Regression", "Data Analysis"], link: "https://github.com/Ziyad-HF/Cancer_Mortality_Rates_Model" },
    { title: "SoundScan: Audio Fingerprint Recognition", pitch: "Recognises who is speaking, and which word, from a short voice recording.", meta: "Signal processing", cats: ["software"], desc: "Desktop app using a Support Vector Classifier on MFCCs for speaker and word recognition.", tags: ["DSP", "SVM", "PyQt"], link: "https://github.com/Ziyad-HF/SonicCipher" },
    { title: "Graphics Toolbox", pitch: "Computer graphics projects, including a small car game.", meta: "Computer graphics", cats: ["software"], desc: "OpenGL projects: shape rendering, animations, and a car collision-avoidance game.", tags: ["OpenGL", "C++"], link: "https://github.com/Ziyad-HF/GFX-Tasks" },
    { title: "TheraPlan: Radiotherapy Facility Planner", pitch: "Designed a complete radiotherapy facility that meets international safety standards.", meta: "Biomedical engineering", cats: ["health"], desc: "Radiotherapy facility design with full systems integration and compliance with IEC/IAEA standards.", tags: ["AutoCAD", "IEC/IAEA"], link: "https://github.com/Ziyad-HF/TheraPlan" },
    { title: "DICOM Volumizer", pitch: "Turns stacks of medical scans into explorable 3D views.", meta: "Team project", cats: ["health", "software"], desc: "DICOM volume renderer using VTK and Qt with iso-surface and ray-casting rendering.", tags: ["VTK", "DICOM", "Qt"], link: "https://github.com/joyou159/Volume-Renderer" },
    { title: "ADVIA 1800 Prototype", pitch: "A low-cost working prototype of a clinical lab analyzer, built with Arduino.", meta: "Medical hardware", cats: ["health"], desc: "Arduino-based clinical analyzer prototype for sampling, mixing, and photometric analysis.", tags: ["Arduino", "Hardware"] }
  ],


  // Dated highlights, newest first (used by the News / timeline views)
  news: [
    { date: "Nov 2026", text: "Our paper on data-centric quality control for winter road condition classification was submitted to the Canadian Journal of Civil Engineering." },
    { date: "Oct 2026", text: "Joined the ITE University of Alberta Student Chapter as Event Coordinator." },
    { date: "Sep 2026", text: "Paper accepted for presentation at the Transportation Research Board (TRB) Annual Meeting 2027." },
    { date: "Aug 2026", text: "Presented a poster at the Faculty of Engineering Graduate Research Symposium (FEGRS) 2026, University of Alberta.", image: "../shared/assets/fegrs-poster.jpg", link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_fegrs2026-ualberta-transportationengineering-ugcPost-7503752452324790272-uk9V/" },
    { date: "Jan 2026", text: "Started my M.Sc. at the University of Alberta as a Graduate Research Fellow in the GeoTrans Lab, with the Graduate Recruitment Scholarship." },
    { date: "Oct 2025", text: "Started as a Medical AI Researcher with the Department of Neurosurgery at Kasr Al Ainy, Cairo University." },
    { date: "Sep 2025", text: "Our Autism Detection Platform won 1st place out of 259 projects in Dell Technologies' Envision the Future competition.", link: "https://www.dell.com/en-ae/dt/campaigns/ecs-internet-things/envision-the-future/winners.htm#tab0=0" },
    { date: "Jul 2025", text: "Graduated from Cairo University (Systems and Biomedical Engineering) and joined Westlake University's Frontiers of Life Sciences summer school in Hangzhou." },
    { date: "May 2025", text: "The Autism Detection Platform received an ITIDA grant through the ITAC Graduation Projects Support Program." }
  ],

  // Places for the journey map (Atlas design), newest first
  journey: [
    { city: "Edmonton", country: "Canada", lat: 53.55, lon: -113.49, years: "2026 – Present", text: "M.Sc. in Transportation Engineering and Graduate Research Fellow at the University of Alberta's GeoTrans Lab; remote Medical AI research with Kasr Al Ainy." },
    { city: "Hangzhou", country: "China", lat: 30.27, lon: 120.16, years: "Summer 2025", text: "Westlake University's Frontiers of Life Sciences summer school: 47 students from 23 countries." },
    { city: "Cairo", country: "Egypt", lat: 30.04, lon: 31.24, years: "Until 2025", text: "B.Sc. in Systems and Biomedical Engineering at Cairo University; internships at Dar Al Fouad Hospital, Siemens Healthineers and Siemens EDA; the Autism Detection Platform." }
  ],

  awards: [
    { date: "Jan 2026", title: "University of Alberta Graduate Recruitment Scholarship", detail: "University of Alberta", image: "../shared/assets/scholarship.jpg", imageFit: "contain" },
    { date: "Sep 2025", title: "1st Place — Dell Technologies Envision the Future", detail: "Out of 259 projects across 14 countries in the Middle East, Africa & Turkey", link: "https://www.dell.com/en-ae/dt/campaigns/ecs-internet-things/envision-the-future/winners.htm#tab0=0", image: "../shared/assets/dell-win.jpg" },
    { date: "May 2025", title: "ITIDA Grant — ITAC Graduation Projects Support Program", detail: "Funding for the Autism Detection Platform", link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_itida-itac-graduationabrprojects-activity-7330945809389191168-1Yo6", image: "../shared/assets/itida.jpg" },
    { date: "Oct 2024", title: "3rd Place — STP Level Up 3.0 Kaggle Competition", detail: "Decision tree model for fake news detection", link: "https://www.kaggle.com/competitions/level-up-3-0", image: "../shared/assets/stp.jpg" },
    { date: "Jun 2024", title: "1st Place — GDSC Machine Learning Workshop", detail: "NLP Kaggle competition", link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_gdsc-developerstudentclubs-gdscmena-activity-7220840300334764032-xhQF", image: "../shared/assets/gdsc.jpg" },
    { date: "2023", title: "Best Participant — IEEE EMBS CUSB Summer School", detail: "2023 Summer School Workshop", image: "../shared/assets/certs/ieee-best.jpg" },
    { date: "Oct 2022", title: "Orange Digital Center — Flutter Workshop", detail: "Completed Flutter training and built mobile apps", link: "https://www.linkedin.com/posts/ziyad-el-fayoumy_my-second-opportunity-was-to-have-a-workshop-activity-7031036571181006848-KnDU", image: "../shared/assets/certs/odc-flutter.jpg" }
  ],

  media: {
    text: "The Autism Detection Platform was featured on BBC Arabic (4Tech), Al-Mehwar TV, and in Egyptian national press including Al-Ahram.",
    image: "../shared/assets/bbc.jpg", imageAlt: "Ziyad interviewed on BBC Arabic's 4Tech programme",
    items: [
      { src: "../shared/assets/bbc.jpg", caption: "BBC Arabic · 4Tech", href: "https://www.bbc.com/arabic/bbc_arabic_tv/tv/n12t24w97" },
      { src: "../shared/assets/al-mehwar.jpg", caption: "Al-Mehwar TV · Al-Khulasa", href: "https://youtu.be/FwhOQz8wDzc" },
      { src: "../shared/assets/al-ahram.jpg", caption: "Al-Ahram newspaper · 22 Sep 2025", href: "https://gate.ahram.org.eg/daily/News/993827.aspx" }
    ],
    link: "https://github.com/Ziyad-HF/Multimodal-Autism-Platform#-media-coverage",
    videos: [
      { label: "BBC Arabic · 4Tech", href: "https://www.bbc.com/arabic/bbc_arabic_tv/tv/n12t24w97" },
      { label: "Al-Mehwar TV · Al-Khulasa", href: "https://youtu.be/FwhOQz8wDzc" }
    ]
  },

  gallery: [
    { src: "../shared/assets/ualberta.jpg", caption: "University of Alberta · 2026", city: "Edmonton" },
    { src: "../shared/assets/fegrs-poster.jpg", caption: "Poster at FEGRS 2026", city: "Edmonton" },
    { src: "../shared/assets/geotrans.jpg", caption: "GeoTrans Lab · 2026", city: "Edmonton" },
    { src: "../shared/assets/westlake.jpg", caption: "Westlake University, Hangzhou · 2025", city: "Hangzhou" },
    { src: "../shared/assets/dell-win.jpg", caption: "Dell Envision the Future winners · 2025", city: "Cairo" },
    { src: "../shared/assets/healthineers-academy.jpg", caption: "Siemens Healthineers Academy Egypt · 2024", city: "Cairo" },
    { src: "../shared/assets/siemens.jpg", caption: "Siemens EDA, Cairo · 2024", city: "Cairo" }
  ],

  // Certificates wall (images rendered from Ziyad's certificate files)
  certificates: [
    { img: "certs/dell.jpg", title: "Envision the Future — 1st Place", issuer: "Dell Technologies", date: "Sep 2025", cat: "award" },
    { img: "certs/ieee-best.jpg", title: "Best Participant, Summer School 2023", issuer: "IEEE EMBS CUSB", date: "2023", cat: "award" },
    { img: "certs/gdsc-first.jpg", title: "Ranked #1, Data Analytics & ML Workshop", issuer: "GDSC Cairo University", date: "Apr–Jul 2024", cat: "award" },
    { img: "certs/tccd.jpg", title: "Certificate of Achievement, 8th Undergraduate Engineering Mathematics Research Forum", issuer: "TCCD, Cairo University", date: "Dec 2022", cat: "research" },
    { img: "certs/fegrs.jpg", title: "Poster Presentation, Graduate Research Symposium", issuer: "University of Alberta", date: "Aug 2026", cat: "research" },
    { img: "certs/digitopia.jpg", title: "Digitopia 2025 — Software & AI track, completed the second stage", issuer: "Ministry of Communications and IT, Egypt", date: "2025", cat: "competition" },
    { img: "certs/ai-empower.jpg", title: "AI Empower Egypt — Hack for Impact", issuer: "Dell Technologies & MCIT", date: "Jul 2025", cat: "competition" },
    { img: "certs/cu-ai-nexus.jpg", title: "CU AI Nexus 2025 conference", issuer: "Cairo University", date: "Oct 2025", cat: "research" },
    { img: "certs/healthineers.jpg", title: "Service Training: Diagnostic Imaging & Laboratory Systems (65 h)", issuer: "Siemens Healthineers", date: "Jul 2024", cat: "industry" },
    { img: "certs/dar-al-fouad.jpg", title: "Certificate of Achievement, Clinical Engineering Program", issuer: "Dar Al Fouad Hospital", date: "Aug–Sep 2023", cat: "industry" },
    { img: "certs/stanford-ml.jpg", title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI & Stanford (Coursera)", date: "Sep 2023", cat: "course" },
    { img: "certs/dl-cv.jpg", title: "Deep Learning for Computer Vision", issuer: "Coursat.ai (Udemy)", date: "Sep 2025", cat: "course" },
    { img: "certs/applied-dl.jpg", title: "Applied Deep Learning", issuer: "Mahara-Tech (ITI)", date: "Aug 2025", cat: "course" },
    { img: "certs/cpp.jpg", title: "The C++ Learning Guide", issuer: "Udemy", date: "Jul 2024", cat: "course" },
    { img: "certs/odc-flutter.jpg", title: "Flutter Workshop (42 h)", issuer: "Orange Digital Center", date: "Oct 2022", cat: "course" },
    { img: "certs/minders.jpg", title: "Flutter Workshop, Minders'22", issuer: "Minders", date: "2022", cat: "course" },
    { img: "certs/ieee-starter.jpg", title: "Biomedical Starter Pack Workshop", issuer: "IEEE CUSB", date: "Jul 2025", cat: "course" }
  ],

  leadership: [
    { org: "ITE University of Alberta Student Chapter", role: "Event Coordinator", dates: "Oct 2026 – Present" },
    { org: "Muslim Students' Association, University of Alberta", role: "Volunteer", dates: "Oct 2026 – Present" },
    { org: "DSC Cairo University", role: "Head of AI Committee & Deep Learning Instructor", dates: "Dec 2024 – Oct 2025", note: "Led the team of instructors for a 14-session deep learning program and taught one of the sessions." },
    { org: "IEEE EMBS CUSB", role: "Clinical Engineering Instructor & Marketing Team Member", dates: "Sep 2023 – Aug 2024" },
    { org: "BEAT", role: "HR/PR Member & Event Organizer", dates: "Dec 2021 – Aug 2023" }
  ],

  skills: {
    "Languages": "Python, C++, MATLAB, JavaScript, Dart, HTML/CSS",
    "AI & ML": "PyTorch, TensorFlow, Scikit-learn, XGBoost, Calibration, Conformal Prediction, Explainability",
    "Computer Vision": "Classification, Detection (YOLO), Segmentation (SegFormer), ConvNeXt, Vision Transformers, OpenCV, MediaPipe",
    "Vision-Language & Speech": "Qwen-VL, PaliGemma, LoRA Fine-Tuning, Hugging Face, Whisper",
    "Data-Centric AI": "Label Quality Control, Confident Learning, Near-Duplicate Detection, Leakage-Aware Splits",
    "Geospatial": "GIS, OpenStreetMap, GPS Map Matching, Weather Data",
    "Research Computing": "Linux, Bash, HPC (SLURM), GPU Training, Git",
    "Medical Imaging": "MRI, CT, DICOM, VTK, Medical Device Calibration"
  }
};

// Asset paths: each page sets window.ASSET_BASE before loading this file
// (site root: "shared/", pages one folder down: "../shared/").
(function () {
  var B = window.ASSET_BASE || "../shared/";
  var fix = function (o) { for (var k in o) { var v = o[k]; if (typeof v === "string" && v.indexOf("../shared/") === 0) o[k] = B + v.slice(10); else if (v && typeof v === "object") fix(v); } };
  fix(window.SITE); window.SITE.assetBase = B;
})();
