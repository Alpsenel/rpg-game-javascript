class BaseCharacter {
    constructor(name, health, magic) {
        this.name = name;
        this.health = 100;
        this.magic = 5;
        this.attributes = {
            strength: 0,
            intelligence: 0,
            quickness: 0
        };
    }
}

class Hero extends BaseCharacter {
    constructor(name, health, magic, gender, race) {
        super(name, health, magic);
        this.gender = gender;
        this.race = race;
        this.equippedWeapon = {
            name: `none`,
            minDamage: null,
            maxDamage: null
        };
        this.equippedArmor = {
            name: `none`,
            armor: null
        };
    }
}
const heros = [];

let chrImages = $('#character-images');
let warriorBtn = $('#warrior-button');
let rogueBtn = $('#hunter-button');
let mageBtn = $('#mage-button');

let buttons = $('button');

function setupButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons.on('click', function () {
            switch (this.textContent.toLowerCase()) {
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
//controll pattern for character classes
let regex = RegExp('img$');

$('#confirm-button').on('click', function () {
    if ($('#char-name').val() != '' && regex.test(chrImages.attr('class'))) {
        //get the user input character name
        let characterName = $('#char-name').val();

        //retrieve the classes on the div element 
        let classes = document.getElementById('character-images').className.split(/\s+/);

        //select the last element to reach user's selected character via last clicked class button
        let className = classes[classes.length - 1];
        let character;
        switch (className) {
            case 'warrior-img':
                character = new Hero(characterName, '', '', 'Male', 'Human');
                character.health = 300;
                character.magic = 1;
                character.attributes.strength = 5;
                character.attributes.quickness = 2;
                character.attributes.intelligence++;
                character.equippedArmor.armor = 'Heavy Armor';
                character.equippedArmor.name = 'Starting Armor';
                character.equippedWeapon.armor = 'Starting Weapon';
                character.equippedWeapon = 'Sword';
                heros.push(character);
                console.log(character);
                break;
            case 'rogue-img':
                character = new Hero(characterName, '', '', 'Male', 'Human');
                character.health = 150;
                character.magic = 2;
                character.attributes.strength = 2;
                character.attributes.quickness = 3;
                character.attributes.intelligence = 2;
                character.equippedArmor.armor = 'Medium Armor';
                character.equippedArmor.name = 'Starting Armor';
                character.equippedWeapon.armor = 'Starting Weapon';
                character.equippedWeapon = 'Bow';
                heros.push(character);
                console.log(character);
                break;
            case 'mage-img':
                character = new Hero(characterName, '', '', 'Male', 'Human');
                character.health = 50;
                character.magic = 5;
                character.attributes.strength = 1;
                character.attributes.quickness = 2;
                character.attributes.intelligence = 5;
                character.equippedArmor.armor = 'Light Armor';
                character.equippedArmor.name = 'Starting Armor';
                character.equippedWeapon.armor = 'Starting Weapon';
                character.equippedWeapon = 'Staff';
                heros.push(character);
                console.log(character);
                break;
            default:
                alert('Choose a class');
                break;
        }
    } else {
        alert('something missing');
    }
});
