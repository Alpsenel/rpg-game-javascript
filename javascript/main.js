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