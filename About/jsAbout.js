//About Us

//Translate button
const languageData = {
    'en': {
        'mission-title': 'Mission',
        'mission-content': 'Our mission at Healthy Living is to inspire and empower individuals to take control of their health and wellbeing through sustainable, holistic practices. We believe that a balanced lifestyle is the key to overall health, happiness, and longevity.',
        'vision-title': 'Vision',
        'vision-content': 'We envision a world where people prioritize their health and wellness, understanding that it is the foundation of a fulfilling life. We strive to be a beacon of hope, information, and guidance for those seeking a healthier lifestyle.',
        'values-title': 'Values',
        'values-content1': 'Integrity - We uphold the highest standards of honesty in all our actions.',
        'values-content2': 'Community - We believe in fostering a supportive and inclusive environment for all.',
        'values-content3': 'Innovation - We continuously seek new ways to serve our community better.',
        'values-content4': 'Empowerment - We provide resources and knowledge to help individuals make informed health decisions.',
        'about-title': 'About Us',
        'about-content': 'Founded in 2023, Healthy Living seek to growing from a small blog to a global community of health enthusiasts, nutritionists, fitness trainers, and medical professionals. We are passionate about providing our audience with the latest research, tips, and trends in the world of health and wellness. Our team is committed to making a positive impact on the lives of our readers, one article at a time.'
        
    },
    'fr': {
        'mission-title': 'Mission',
        'mission-content': 'Notre mission chez Healthy Living est d`inspirer et de donner aux individus les moyens de prendre le contrôle de leur santé et de leur bien-être grâce à des pratiques durables et holistiques. Nous pensons qu’un mode de vie équilibré est la clé de la santé, du bonheur et de la longévité en général.',
        'vision-title': 'Vision',
        'vision-content': 'Nous envisageons un monde dans lequel les gens donnent la priorité à leur santé et à leur bien-être, sachant que c’est le fondement d’une vie épanouie. Nous nous efforçons d’être une lueur d’espoir, d’information et de conseils pour ceux qui recherchent un mode de vie plus sain.',
        'values-title': 'Valeurs',
        'values-content1': 'Intégrité - Nous respectons les normes d’honnêteté les plus élevées dans toutes nos actions.',
        'values-content2': 'Communauté - Nous croyons en la promotion d’un environnement favorable et inclusif pour tous.',
        'values-content3': 'Innovation - Nous recherchons continuellement de nouvelles façons de mieux servir notre communauté.',
        'values-content4': 'Autonomisation - Nous fournissons des ressources et des connaissances pour aider les individus à prendre des décisions éclairées en matière de santé.',
        'about-title': 'À propos de nous',
        'about-content': 'Fondée en 2023, Healthy Living cherche à passer d`un petit blog à une communauté mondiale de passionnés de santé, de nutritionnistes, d`entraîneurs de fitness et de professionnels de la santé. Nous sommes passionnés par l’idée de fournir à notre public les dernières recherches, conseils et tendances dans le monde de la santé et du bien-être. Notre équipe s`engage à avoir un impact positif sur la vie de nos lecteurs, un article à la fois.'
        
    }
};

let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    document.getElementById('lang-switcher').innerText = currentLanguage === 'en' ? 'French' : 'English';
    updateText();
}

function updateText() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.innerText = languageData[currentLanguage][key];
    });
}

window.onload = updateText;
