/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Calendar, 
  MapPin, 
  FileText, 
  Award, 
  ChevronRight, 
  ExternalLink, 
  Microscope, 
  Bot, 
  Activity,
  Mail,
  Clock,
  X,
  Bone,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Trophy
} from 'lucide-react';

const RHEUM_AI_BLUE = "#0056b3";
const RHEUM_AI_DARK = "#0a192f";

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-8">
    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
    <h2 className="text-3xl font-bold tracking-tight text-slate-900">{children}</h2>
  </div>
);

const Card = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </div>
);

const RheumAiLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const dimensions = {
    sm: { container: "w-8 h-8", bot: "w-4 h-4", bone: "w-5 h-5", spacing: "-mt-1" },
    md: { container: "w-12 h-12", bot: "w-6 h-6", bone: "w-8 h-8", spacing: "-mt-1.5" },
    lg: { container: "w-32 h-32", bot: "w-16 h-16", bone: "w-20 h-20", spacing: "-mt-4" },
  }[size];

  return (
    <div className={`relative ${dimensions.container} flex items-center justify-center group shrink-0`}>
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/15 transition-colors duration-500" />
      
      {/* The "Unified" Composition */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Bot (The AI Brain) */}
        <motion.div
          animate={{ 
            y: [0, -2, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "easeInOut" 
          }}
          className="z-20 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
        >
          <Bot className={dimensions.bot} />
        </motion.div>
        
        {/* Bone (The Rheumatology Foundation) - Positioned to look like it's being held/carried */}
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: [-15, -10, -15] }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "easeInOut" 
          }}
          className={`${dimensions.spacing} z-10 text-slate-300 group-hover:text-blue-400 transition-colors duration-500`}
        >
          <Bone className={dimensions.bone} />
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const teamMembers = [
    { 
      name: "Maria Chiara Fiorentino", 
      org: "Università Politecnica delle Marche, Italy",
      email: "mariachiara.fiorentino@unich.it",
      bio: "Maria Chiara Fiorentino received her M.Sc. degree cum laude in Biomedical Engineering in 2018 and her Ph.D. degree cum laude in Information Engineering in 2023, both from Università Politecnica delle Marche (UNIVPM), Ancona, Italy. Her doctoral research focused on deep learning for ultrasound image analysis in gynecology and rheumatology, and her thesis, “DL4US: Unlocking the potential of deep learning for ultrasound image analysis in gynecology and rheumatology,” was awarded among the best Italian Ph.D. theses by the Gruppo Nazionale di Bioingegneria. She is currently a Postdoctoral Researcher at the Department of Information Engineering, Università Politecnica delle Marche, where she works on AI-based methods for medical data analysis in diagnosis and therapy. Throughout her research activity, she has collaborated with several industrial and research institutions, including Esaote S.p.A. — a leading company in ultrasound imaging systems — SoundsafeCare, specialized in robotic ultrasound systems for focused ultrasound applications, Vicomtech, the Basque research center specializing in applied artificial intelligence and computer vision for healthcare, and Universitat Pompeu Fabra (UPF), Barcelona, Spain. She has authored several papers in international peer-reviewed journals and conferences and serves as a reviewer for leading venues in medical image analysis and artificial intelligence.",
      img: "team/maria-chiara-fiorentino.jpg"
    },
    { 
      name: "Riccardo Rosati", 
      org: "University of Macerata, Italy",
      email: "riccardo.rosati@unimc.it",
      bio: "Riccardo Rosati obtained his Ph.D. in Information Engineering from the Università Politecnica delle Marche. He is currently an Assistant Professor at the University of Macerata. His research interests primarily focus on Machine Learning and Deep Learning, specifically in multitask, ordinal and hierarchical learning, and their applications in Industry 4.0/5.0 and biomedical domains. He is the author of 30+ international scientific publications and serves as an Associate Editor for The Visual Computer (Springer Nature). He was a PC member for several international top ranking conferences (ECML-PKDD, IJCAI, ECAI - recognized as an Outstanding PC Member for ECAI 2025). He co-organized workshops at prestigious venues such as the IEEE International Conference on Biomedical and Health Informatics (BHI 2024) and the International Conference on Industry 4.0 and Smart Manufacturing (ISM 2023). He has extensive experience in technological transfer projects, collaborating with numerous international companies. In 2023, he was a Visiting Researcher at the University of Córdoba (Spain) to advance his work on ordinal regression methodologies.",
      img: "team/riccardo-rosati.jpg"
    },
    { 
      name: "Luca Romeo", 
      org: "University of Macerata, Italy",
      email: "luca.romeo@unimc.it",
      bio: "Luca Romeo is Associate Professor of Computer Science at the University of Macerata (UniMC), Department of Economics and Law. Additionally, he is affiliated with the Unit of Computational Statistics and Machine Learning at Fondazione Istituto Italiano di Tecnologia (IIT) in Genova, Italy. Dr. Romeo’s research centers on designing novel machine learning algorithms to address complex challenges in real-world domains. He has authored over 50 publications in leading conferences and journals. He serves as an Associate Editor for the Neurocomputing (Elsevier) journal and Medical & Biological Engineering & Computing (MBEC). Dr. Romeo is actively involved in the global AI research community, serving as a Senior Program Committee (SPC) member for the International Joint Conference on Artificial Intelligence and as a member of the Ellis Society, a pan-European network of AI excellence.",
      img: "team/luca-romeo.jpg",
      imgPos: "top"
    },
    { 
      name: "Emilio Filippucci", 
      org: "Polytechnic University of Marche, Italy",
      email: "e.filippucci@univpm.it",
      bio: "Professor Filippucci is an Associate Professor of Rheumatology at the Polytechnic University of Marche (Ancona, Italy) and Head of the Rheumatology Department at the \"Carlo Urbani\" Hospital (Jesi, Italy). He has authored over 300 peer-reviewed publications, with an h-index of 63. He is a faculty member and active contributor to educational initiatives of the European Alliance of Associations for Rheumatology (EULAR), especially in ultrasound training courses, and many ultrasound-focused special interest groups within the Outcome Measures in Rheumatology (OMERACT). His research focuses on the application of ultrasound in rheumatic and musculoskeletal diseases, including rheumatoid arthritis and spondyloarthritis, contributing to standardised imaging definitions and scoring systems used worldwide. Beyond his publication record, Professor Filippucci is widely recognised and regularly invited to national and international congresses and training programs, where he contributes to the dissemination and standardisation of musculoskeletal ultrasound in rheumatology.",
      img: "team/emilio-filippucci.jpg",
      imgPos: "top"
    },
    { 
      name: "Edoardo Cipolletta", 
      org: "Marche University Hospitals, Italy & University of Nottingham, UK",
      email: "edoardo.cipolletta@nottingham.ac.uk",
      bio: "Dr Cipolletta is a Consultant Rheumatologist in the Department of Internal Medicine at the Marche University Hospitals (Ancona, Italy) and an associate research fellow in the Academic Rheumatology at the University of Nottingham (Nottingham, UK). He received his medical training at the Polytechnic University of Marche (2010-2016) and his residency training at \"Carlo Urbani\" Hospital, both in Italy (2017-2022). He completed an international PhD on the diagnosis and prognosis of flares in crystal arthritis in 2025. Apart from crystal arthritis, his other research interests include the epidemiology of rheumatic diseases, ultrasonography in musculoskeletal diseases, and the development of clinical prognostic models. He has published over 100 peer-reviewed articles (H-index 23).",
      img: "team/edoardo-cipolletta.jpg"
    },
    { 
      name: "Pedro Antonio Gutiérrez", 
      org: "University of Córdoba, Spain",
      email: "pagutierrez@uco.es",
      bio: "Pedro Antonio Gutiérrez received the B.S. degree in Computer Science from the University of Sevilla (Spain) in 2006, and the Ph.D. degree in Computer Science and Artificial Intelligence from the University of Granada (Spain) in 2009. He is currently a Professor with the Department of Computer Science and Numerical Analysis, University of Córdoba (Spain). His research interests are in the areas of supervised learning, evolutionary artificial neural networks and ordinal classification for both shallow and deep learning models. He serves on the Editorial board for the journal IEEE Transaction on Neural Networks and Learning Systems and on the organisation/program committees of several computational intelligence conferences.",
      img: "team/pedro-antonio-gutierrez.jpg",
      imgPos: "top"
    },
    { 
      name: "César Hervás Martínez", 
      org: "University of Córdoba, Spain",
      email: "chervas@uco.es",
      bio: "César Hervás-Martínez was born in Cuenca, Spain. He received a B.S. degree in statistics and operations research from the Universidad Complutense de Madrid, Madrid, Spain, in 1978 and a Ph.D. in mathematics from the University of Seville, Seville, Spain, in 1986. He is a Computer Science and Artificial Intelligence Professor at the Department of Computer Science and Numerical Analysis, University of Córdoba, Córdoba, Spain. His current research interests include neural networks, evolutionary computation, and natural systems modeling.",
      img: "team/cesar-hervas-martinez.jpg",
      imgPos: "top"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <RheumAiLogo size="sm" />
              <span className="text-xl font-bold tracking-tighter text-slate-900">RHEUM-AI</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#speakers" className="hover:text-blue-600 transition-colors">Speakers</a>
              <a href="#dates" className="hover:text-blue-600 transition-colors">Dates</a>
              <a href="#program" className="hover:text-blue-600 transition-colors">Program</a>
              <a href="#team" className="hover:text-blue-600 transition-colors">Organizers</a>
              <div className="flex items-center gap-3">
                <a href="#cfp" className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors border border-blue-100">
                  Call for Papers
                </a>
                <a href="https://conferences.miccai.org/2026/en/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  MICCAI 2026 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden py-24 sm:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="hero-bg.jpg" 
            alt="RHEUM-AI Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" /> Accepted at MICCAI 2026
            </div>
            <div className="flex justify-center mb-10">
              <RheumAiLogo size="lg" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              RHEUM-AI
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              First Workshop on Advanced Computational Methods <br className="hidden sm:block" /> for Rheumatologic Imaging
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm mb-10">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Calendar className="w-4 h-4" /> MICCAI 2026 Satellite Event
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4" /> Strasbourg, France
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="#cfp" 
                className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <FileText className="w-5 h-5" />
                Call for Papers
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Workshop Description */}
        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle icon={Microscope}>Workshop Scope</SectionTitle>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Rheumatic and musculoskeletal diseases (RMDs) comprise a wide spectrum of chronic inflammatory and degenerative conditions affecting joints, connective tissues, and internal organs, representing a major global health burden.
              </p>
              <p>
                Medical imaging modalities such as ultrasound (US), magnetic resonance imaging (MRI), conventional radiography (X-ray), computed tomography (CT), and emerging techniques including photoacoustic imaging are fundamental for diagnosis, disease monitoring, and treatment assessment. However, image interpretation remains challenging due to subtle early pathological changes, heterogeneous disease manifestations, and the reliance on standardized but time-consuming scoring systems that require substantial clinical expertise.
              </p>
              <p>
                While AI-driven medical image analysis has achieved remarkable success in domains such as oncology and cardiology, rheumatologic imaging has received comparatively limited attention. <strong>RHEUM-AI</strong> aims to establish rheumatology as a key frontier for AI-driven research, bridging the gap between algorithmic development and real-world clinical needs.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clinical Impact</h4>
                    <p className="text-sm">Addressing robustness, interpretability, and workflow integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="mt-1 p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">AI Innovation</h4>
                    <p className="text-sm">Multimodal data, temporal dynamics, and patient-specific variability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Areas of Interest */}
        <section id="cfp" className="bg-slate-900 rounded-[3rem] p-12 sm:p-20 text-white">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">Call for Papers</h2>
            <p className="text-slate-400 mb-12 text-lg">
              The RHEUM-AI workshop welcomes original contributions on topics including, but not limited to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                title: "Computer-aided diagnosis and classification",
                desc: "Early disease detection and subtype classification"
              },
              {
                title: "Quantitative assessment and clinical scoring",
                desc: "Automated computation of established scoring systems (e.g., RAMRIS, OMERACT, Sharp); Objective disease severity assessment"
              },
              {
                title: "Segmentation and quantitative analysis",
                desc: "Segmentation of joints, bones, cartilage, and soft tissues; Detection and quantification of synovitis, erosions, bone marrow edema, and cartilage damage"
              },
              {
                title: "Multimodal and multi-source learning",
                desc: "Integration of imaging with clinical, laboratory, genetic, and patient-reported data; Cross-modality learning and fusion"
              },
              {
                title: "Temporal and longitudinal modeling",
                desc: "Disease progression analysis; Treatment response prediction"
              },
              {
                title: "Foundation models and representation learning",
                desc: "Transfer learning, self-supervised and weakly supervised learning for rheumatologic imaging"
              },
              {
                title: "Generative and data-centric AI",
                desc: "Data augmentation, synthetic data generation, and cross-modality synthesis"
              },
              {
                title: "Explainable, trustworthy, and robust AI",
                desc: "Interpretability, uncertainty estimation, bias analysis, and robustness"
              },
              {
                title: "Federated and privacy-preserving learning",
                desc: "Multi-center collaboration under data-sharing constraints"
              },
              {
                title: "Clinical translation",
                desc: "Workflow integration, prospective validation, and regulatory considerations"
              },
              {
                title: "Datasets, benchmarks, and challenges",
                desc: "Public datasets, evaluation protocols, and community challenges"
              }
            ].map((item, i) => (
              <div key={i} className="space-y-2 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                  <h4 className="text-lg font-bold text-white transition-colors">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm pl-4.5 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-16 border-t border-slate-100">
          {/* Review Process */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              Review Process
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To ensure high academic standards, the workshop adopts a <strong>double-blind peer-review process</strong>. 
              Each submission will be evaluated by at least three independent reviewers from our Program Committee. 
              Submissions are managed through the <a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/RHEUM-AI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">OpenReview</a> platform to ensure transparency and traceability.
            </p>
          </div>

          {/* Diversity & Inclusion */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              Diversity & Inclusion
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We are committed to achieving <strong>gender balance</strong> and <strong>geographic diversity</strong>. 
              The call for papers encourages submissions addressing challenges specific to low-resource settings, 
              aligning with MICCAI's mission to foster global inclusion without compromising scientific excellence.
            </p>
          </div>

          {/* Proceedings */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              Proceedings
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Accepted papers will be included in the <strong>MICCAI Satellite Events LNCS proceedings</strong>, 
              published by <strong>Springer Nature</strong>. This ensures archival publication standards and 
              broad visibility within the scientific community.
            </p>
          </div>

          {/* Best Paper Award */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              Best Paper Award
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To recognize exceptional contributions to the field of rheumatologic imaging, 
              a <strong>Best Paper Award</strong> will be presented during the workshop. 
              The award aims to stimulate high-quality research and innovative methodological approaches.
            </p>
          </div>
        </section>

        {/* Important Dates */}
        <section id="dates" className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div>
              <SectionTitle icon={Calendar}>Important dates</SectionTitle>
              <p className="text-slate-500 text-lg leading-relaxed -mt-4">
                Key milestones for the RHEUM-AI workshop
              </p>
            </div>
            
            <div className="relative space-y-6">
              {/* Vertical Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-blue-100" />
              
              {[
                { label: "Workshop paper submission deadline", date: "July 1, 2026" },
                { label: "Notification of acceptance", date: "July 31, 2026" },
                { label: "Camera-ready submission", date: "September 3, 2026" },
                { label: "Workshop day", date: "To be announced" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-sm">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-medium sm:whitespace-nowrap">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900 sm:whitespace-nowrap">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Event & Organization Section */}
      <div className="bg-slate-50/80 border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          {/* Keynote Speakers */}
        <section id="speakers">
          <SectionTitle icon={Users}>Invited Keynote Speakers</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col items-center text-center py-12 border-dashed border-2 border-slate-200 bg-slate-50/50">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-300">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-400 mb-1">To be announced</h3>
                  <p className="text-slate-400 text-sm italic">Coming soon</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Program Schedule */}
        <section id="program">
          <SectionTitle icon={Clock}>Tentative Schedule</SectionTitle>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { time: "13:30", event: "Welcome and opening remarks" },
                { time: "13:45", event: "Keynote Talk #1" },
                { time: "14:15", event: "Keynote Talk #2" },
                { time: "14:45", event: "Coffee break" },
                { time: "15:00", event: "Keynote Talk #3" },
                { time: "15:30", event: "Poster session and Networking" },
                { time: "16:30", event: "Panel discussion: clinicians and AI experts roundtable" },
                { time: "17:30", event: "Closing remarks" },
                { time: "17:45", event: "End of workshop" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                  <span className="font-mono text-blue-600 font-bold w-16">{item.time}</span>
                  <div className="w-px h-8 bg-slate-200" />
                  <span className="text-slate-700 font-medium">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section id="team">
          <SectionTitle icon={Users}>Organizers</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <Card 
                key={i} 
                className="flex flex-col items-center text-center p-8 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-[130px] h-[130px] rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-sm group-hover:border-blue-100 transition-colors">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className={`w-full h-full object-cover ${member.imgPos === 'top' ? 'object-top' : 'object-center'}`} 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-xl">{member.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mt-2">{member.org}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm mt-4 bg-slate-50 px-3 py-1 rounded-full">
                  <Mail className="w-3 h-3" />
                  {member.email}
                </div>
                <div className="mt-6 text-blue-600 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Read Bio <ChevronRight className="w-3 h-3" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Committee */}
        <section id="program-committee">
          <SectionTitle icon={Users}>Program Committee</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rocco Pietrini", org: "Mercatorum University, IT" },
              { name: "Paolo Sernani", org: "University of Macerata, IT" },
              { name: "Marina Paolanti", org: "University of Macerata, IT" },
              { name: "Emanuele Balloni", org: "Polytechnic University of Marche, IT" },
              { name: "Lorenzo Federici", org: "Polytechnic University of Marche, IT" },
              { name: "Alessandro Di Matteo", org: "University G. d'Annunzio Chieti-Pescara, IT" },
              { name: "Sara Moccia", org: "University G. d'Annunzio Chieti-Pescara, IT" },
              { name: "Angelo Lasala", org: "School of Advanced Studies Sant'Anna, IT" },
              { name: "Francisco Bérchez-Moreno", org: "University of Córdoba, ES" },
              { name: "Víctor M. Vargas", org: "University of Córdoba, ES" },
              { name: "Antonio Manuel Gómez-Orellana", org: "University of Córdoba, ES" }
            ].map((member, i) => (
              <div key={i} className="flex flex-col bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 text-lg">{member.name}</h4>
                <p className="text-blue-600 text-sm mt-1">{member.org}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

    <AnimatePresence>
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            layoutId={`member-${selectedMember.name}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 bg-slate-50 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                  <img 
                    src={selectedMember.img} 
                    alt={selectedMember.name} 
                    className={`w-full h-full object-cover ${selectedMember.imgPos === 'top' ? 'object-top' : 'object-center'}`} 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-xl leading-tight">{selectedMember.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mt-2">{selectedMember.org}</p>
              </div>
              
              <div className="md:w-3/4 p-8 md:p-10">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Users className="w-4 h-4" />
                  <span className="uppercase tracking-widest font-bold">Organizers</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Biography</h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{selectedMember.bio}"
                </p>
                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Contact</p>
                    <p className="text-slate-900 font-medium">{selectedMember.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <RheumAiLogo size="sm" />
                <span className="text-white font-bold text-xl tracking-tighter">RHEUM-AI</span>
              </div>
              <p className="text-sm leading-relaxed">
                Advancing the intersection of rheumatology and artificial intelligence for better patient outcomes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About the Workshop</a></li>
                <li><a href="#cfp" className="hover:text-white transition-colors">Call for Papers</a></li>
                <li><a href="#dates" className="hover:text-white transition-colors">Important Dates</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">Keynote Speakers</a></li>
                <li><a href="#program" className="hover:text-white transition-colors">Tentative Schedule</a></li>
                <li><a href="https://conferences.miccai.org/2026/en/" className="hover:text-white transition-colors">MICCAI 2026</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>rheumai.ws@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Strasbourg, France</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 RHEUM-AI Workshop Organizers. All rights reserved.</p>
            <p>Held in conjunction with MICCAI 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
