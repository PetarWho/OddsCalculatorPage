window.addEventListener('load', addCases);

function addCases(){
    let casesDiv = document.getElementsByClassName('all-hits-container')[0];
    let limitedCasesDiv = document.getElementsByClassName('limited-container')[0];
    let gitHubImgElement = document.getElementById('github-img');

    let arrOfElements = ['Rocket Raccoon - 39.38% | 60.62',
    'Gradient - 37.49% | 62.51',
    'Royal - 37.03% | 62.97',
    'Shadow - 36.95% | 63.05',
    'Toxic - 36.80% | 63.20',
    'Beast - 36.79% | 63.21',
    'Hulk - 36.77% | 63.23',
    'Dragon - 36.69% | 63.31',
    'Agent - 36.55% | 63.45',
    'Splinter - 36.52% | 63.48',
    'Marker - 36.19% | 63.81',
    'Nice Shot - 35.88% | 64.12',
    'Omega - 35.83% | 64.17',
    'Bullet - 35.62% | 64.38',
    'M4 - 35.59% | 64.41',
    'Serpent - 34.85% | 65.15',
    'Vest - 34.67% | 65.33',
    'Venom - 34.40% | 65.60',
    'Viper - 34.25% | 65.75',
    'Avalanche - 34.22% | 65.78',
    'Dream - 34.10% | 65.90',
    'Banana - 34.07% | 65.93',
    'Deadpool - 34.03% | 65.97',
    'Diablo - 33.91% | 66.09',
    'Terrorist - 33.77% | 66.23',
    'Master - 33.51% | 66.49',
    'The Expendables - 33.45% | 66.55',
    'Mafia - 33.35% | 66.65',
    'Space - 33.24% | 66.76',
    'Batman - 33.19% | 66.81',
    'Teeth - 32.41% | 67.59',
    'Bumblebee - 32.29% | 67.71',
    'Vision - 32.19% | 67.81',
    'Thor - 32.06% | 67.94',
    'Cobra - 31.49% | 68.51',
    'Bloodshot - 31.14% | 68.86',
    'Razor - 31.14% | 68.86',
    'Thanos - 30.89% | 69.11',
    'Thunder - 30.76% | 69.24',
    'Vice - 30.13% | 69.87',
    'Arrow - 30.10% | 69.90',
    'Ironman - 30.04% | 69.96',
    'Captain America - 29.91% | 70.09',
    'Hive - 29.86% | 70.14',
    'Lazure - 29.85% | 70.15',
    'Spider - 29.85% | 70.15',
    'Tooth - 29.85% | 70.15',
    'Focus - 29.42% | 70.58',
    'Restricted - 29.41% | 70.59',
    'Bubble - 29.34% | 70.66',
    'Pika Pika - 29.32% | 70.68',
    'Strike - 28.71% | 71.29',
    'Mil-Spec - 28.17% | 71.83',
    'Gloves - 26.98% | 73.02',
    'Crimson Emerald - 26.35% | 73.65',
    'Joker - 26.07% | 73.93',
    'Ice Blast - 25.50% | 74.50',
    'Lore - 25.11% | 74.89',
    'Fang - 24.85% | 75.15',
    'Glock-18 - 24.58% | 75.42',
    'AK-47 - 23.36% | 76.64',
    'AWP - 23.36% | 76.64',
    'Covert - 17.67% | 82.33',
    'USP-S - 17.65% | 82.35',
    'New Knives - 13.24% | 86.76',
    'Knives - 10.94% | 89.06'];
    let arrOfLimitedElements = ['Office - 38.98% | 61.02',
    'Angel - 37.94% | 62.06',
    'Concept - 36.46% | 63.54',
    'Cyber - 36.34% | 63.66',
    'Gravity - 35.38% | 64.62',
    'Rider - 34.88% | 65.12',
    'Museo - 34.72% | 65.28',
    'Stream - 30.98% | 69.02',
    'Hot - 30.90% | 69.10',
    '10% Knife - 10.00% | 90.00'];
    
    for (const item of arrOfElements) {
        let insideDivCase = document.createElement('div');
        insideDivCase.setAttribute("class", 'hits-info');
        let h2Inner = document.createElement('h2');
        h2Inner.textContent = item;
        insideDivCase.appendChild(h2Inner);
        casesDiv.appendChild(insideDivCase);
    }

    for (const item of arrOfLimitedElements) {
        let insideDivCase = document.createElement('div');
        insideDivCase.setAttribute("class", 'hits-info');
        let h2Inner = document.createElement('h2');
        h2Inner.textContent = item;
        insideDivCase.appendChild(h2Inner);
        limitedCasesDiv.appendChild(insideDivCase);
    }

    gitHubImgElement.addEventListener('click', function () {
        window.location.href = "https://github.com/PetarWho";
    })
}