var pokemon;
var card = document.getElementById("card");

document.addEventListener('keydown', e =>{
    if(e.key == 'Enter') {
        getItem();
    } 
})

function generateUrl() {
    let pokemonName = document.getElementById('searchInput').value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    pokemonName = '';
    return url;
}

function getItem(url = generateUrl()){
    fetch(url)
	.then( response => response.json() )
	.then( dados => { 
        pokemon = dados;
        console.log(dados);
        showProperties(dados);
    })
	.catch( _ => {
        card.innerHTML = '';

        let error = document.createElement('span');
        error.className = 'error';
        error.innerText = 'Pokemon não Encontrado';
        card.appendChild(error);
        
        console.log(_);
        
    })
	.finally( () => { console.log('Processo finalizado!') } );
}

    
    
function showProperties(dados) {
    if (document.getElementById('searchInput').value == '') {
        dados.name = "Pokemon não Encontrado";
    } 

    card.innerHTML = "";
    let title = document.createElement('h1');
    title.innerText = `${dados.name}`;
    title.className = 'title';


    card.appendChild(title);

    let image = document.createElement('img')
    
    image.src = dados.sprites.front_default;
    image.className = 'img-fluid rounded shadow';
        
    card.appendChild(image);

    let skills = document.createElement('div')
    skills.className = 'skills'


    let skillsTitle = document.createElement('h3');
    skillsTitle.innerText = 'Habilidades';
    skills.appendChild(skillsTitle);

    //Skills

    dados.abilities.forEach(skill => {
        let skillName = document.createElement('p');
        skillName.innerText = skill.ability.name;
        skills.appendChild(skillName);
        
    });

    card.appendChild(skills)
    
    //Forms
    
    let forms = document.createElement('div');
    forms.className = 'forms';

    let formsTitle = document.createElement('h3');
    formsTitle.innerText = 'Formas';
    forms.appendChild(formsTitle);

    dados.forms.forEach(form => {
        let formName = document.createElement('p');
        formName.innerText = form.name;
        forms.appendChild(formName);
    });

     card.appendChild(forms);


    // Species

    let species = document.createElement('div');
    species.className = 'species';

    let speciesTitle = document.createElement('h3');
    speciesTitle.innerText = 'Espécies';
    species.appendChild(speciesTitle);

    let speciesName = document.createElement('p');
    speciesName.innerHTML = dados.species.name;

   species.appendChild(speciesName);
        
    card.appendChild(species);

    // Types

    let types = document.createElement('div');
    types.className = 'types';

    let typesTitle = document.createElement('h3');
    typesTitle.innerText = 'Tipos';
    types.appendChild(typesTitle);

    dados.types.forEach(type => {
        let typeName = document.createElement('p')
        typeName.innerText = type.type.name;

        types.appendChild(typeName);

        });
        
    card.appendChild(types);

    // Base experience

    let experience = document.createElement('div');
    experience.className = 'experience';

    let experienceTitle = document.createElement('h3');
    experienceTitle.innerText = 'Experiência';
    experience.appendChild(experienceTitle);

    let experienceName = document.createElement('p')
    experienceName.innerText = dados.base_experience;

    experience.appendChild(experienceName);
        
    card.appendChild(experience);

    // Height

    let height = document.createElement('div');
    height.className = 'height';

    let heightTitle = document.createElement('h3');
    heightTitle.innerText = 'Altura';
    height.appendChild(heightTitle);

    let heightName = document.createElement('p')
    heightName.innerText = dados.height;

    height.appendChild(heightName);
        
    card.appendChild(height);
}