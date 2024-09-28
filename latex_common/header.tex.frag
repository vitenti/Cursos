\ifuseseminar
    \documentclass[brazilian,seminar,twoside,onecolumn]{lecture/lecture}
\else
    \documentclass[brazilian,course,twoside,onecolumn]{lecture/lecture}
\fi

\usepackage{geometry}
\newgeometry{left=2.5cm,right=4cm,top=3cm}
\usepackage{braket}

\usepackage{multicol}
\usepackage{ifthen}
\newboolean{firstanswerofthechapter}
\usepackage{xcolor}
\colorlet{lightcyan}{cyan!40!white}
\usepackage{chngcntr}
\usepackage{stackengine}
\usepackage{bm}

\usepackage{tasks}
\setlength{\headheight}{41.0pt}
\newlength{\longestlabel}
\settowidth{\longestlabel}{\bfseries viii.}
\settasks{counter-format={tsk[r].}, label-format={\bfseries}, label-width=\longestlabel,
    item-indent=0pt, label-offset=2pt, column-sep={10pt}}
\usepackage[lastexercise,answerdelayed]{exercise}
\graphicspath{{./}{../latex_common/}{../../latex_common/}{../../../latex_common/}}

\fancypagestyle{firstpage}{\fancyhf{}\fancyhead[R]{\includegraphics[height=0.5in, keepaspectratio=true]{Logo_UEL.jpg}}}
\fancypagestyle{plain}{\fancyhf{}\fancyhead[L]{\includegraphics[height=0.5in, keepaspectratio=true]{Logo_UEL.jpg}}}
\fancypagestyle{empty}{\fancyhf{}\fancyhead[R]{\includegraphics[height=0.5in, keepaspectratio=true]{Logo_UEL.jpg}}}
\pagestyle{plain}

\renewcommand\listexercisename{Lista de exercícios}%
\renewcommand\ExerciseName{Exercício}%
\renewcommand\AnswerName{Solução do exercício}%
\renewcommand\ExerciseListName{Ex.}%
\renewcommand\AnswerListName{Solução}%
\renewcommand\ExePartName{Parte}%

\renewcommand{\ExerciseHeader}{\noindent\def\stackalignment{l}% code from https://tex.stackexchange.com/a/195118/101651
    \stackunder[0pt]{\colorbox{blue}{\textcolor{white}{\textbf{\LARGE\ExerciseHeaderNB\;\large\ExerciseName}}}}{\textcolor{lightcyan}{\rule{\linewidth}{2pt}}}\medskip}
\renewcommand{\AnswerName}{Exercises}
\renewcommand{\AnswerHeader}{\ifthenelse{\boolean{firstanswerofthechapter}}%
    {\bigskip\noindent\textcolor{cyan}{\textbf{CHAPTER \thechapter}}\newline\newline%
        \noindent\bfseries\emph{\textcolor{cyan}{\AnswerName\ \ExerciseHeaderNB, page %
                \pageref{\AnswerRef}}}\smallskip}
    {\noindent\bfseries\emph{\textcolor{cyan}{\AnswerName\ \ExerciseHeaderNB, page \pageref{\AnswerRef}}}\smallskip}}
\setlength{\QuestionIndent}{16pt}

\renewcommand{\vec}{\boldsymbol}
\newcommand{\VARM}{\mathcal{M}}
\newcommand{\FT}{\mathrm{T}}
\newcommand{\FD}{\mathrm{D}}
\newcommand{\CINFM}{C^\infty\!\left(\VARM\right)}
\newcommand{\TpM}{\FT_p\VARM}
\newcommand{\TM}{\FT\VARM}
\newcommand{\DpM}{\FD_p\VARM}
\newcommand{\DM}{\FD\VARM}
\newcommand{\RR}{\mathbb{R}}
\newcommand{\EV}{\mathbb{V}}
\newcommand{\dd}{\mathrm{d}}

\author{Sandro Dias Pinto Vitenti}
\place{Departamento de Física -- CCE -- UEL}
