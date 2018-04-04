class BaseCharacter {
    constructor(name, health, magic){
        this.name = name;
        this.health = 100;
        this.magic = 5;
        this.attributes= {
            strength: 0,
            intelligence: 0,
            quickness: 0
        };
    }
}

class Hero extends BaseCharacter {
    constructor(name,health,magic,gender,race){
        super(name,health,magic);
        this.gender = gender;
        this.race = race;
        this.equippedWeapon = {
            name : `none`,
            minDamage : null,
            maxDamage : null
        };
        this.equippedArmor = {
            name : `none`,
            armor : null
        };
    }
}

let chrImages = $('#character-images');
let warriorBtn = $('#warrior-button');
let rogueBtn = $('#hunter-button');
let mageBtn = $('#mage-button');

let buttons = $('button');

function setupButtons() {
    for(let i = 0; i < buttons.length; i++){
        buttons.on('click', function(){
            switch(this.textContent.toLowerCase()){
                case 'warrior':
                    chrImages.attr('class', 'col-6 warrior-img');
                    break;
                case 'hunter':
                    chrImages.attr('class', 'col-6 rogue-img');
                    break;
                case 'mage':
                    chrImages.attr('class', 'col-6 mage-img');
                    break;
            }
        });
    }
}    
setupButtons();
let regex = RegExp('img$');
$('#confirm-button').on('click', function(){
    if( $('#char-name').val() != '' && regex.test(chrImages.attr('class'))){
        
        let characterName = $('#char-name').val();
        
        //retrieve the classes on the div element 
        let classes = document.getElementById('character-images').className.split(/\s+/);
        //select the last element to reach user's selected character
        let className = classes[classes.length-1];
        switch(className){
            case 'warrior-img':
                let char1 = new Hero(characterName,100,5,'Male','Human');
                characterName.health = 300;
                console.log(char1);
                document.cookie('back_to_url_onPage_')
                document.cookie('char1',char1);
                break;
        }
        console.log(char1);    
    }
    else{
        alert('something missing');
    }
});
