const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Марина",
            "id_2": "Елена",
            "id_3": "Ольга",
            "id_4": "Екатерина",
            "id_5": "Василиса",
            "id_6": "Диана",
            "id_7": "Тамара",
            "id_8": "Татьяна",
            "id_9": "Анастасия",
            "id_10": "Галина"
        }
    }`,

    secondNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Владимиров",
            "id_6": "Алексеев",
            "id_7": "Олегов",
            "id_8": "Михайлов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,

    professionJsonCommon: `{
        "count": 5,
        "list": {     
            "id_1": "Доктор",
            "id_2": "Повар",
            "id_3": "Инженер",
            "id_4": "Учитель",
            "id_5": "Бухгалтер"
        }
    }`,

    professionJsonMale: `{
        "count": 5,
        "list": {     
            "id_1": "Строитель",
            "id_2": "Слесарь",
            "id_3": "Шахтер",
            "id_4": "Фрезеровщик",
            "id_5": "Солдат"
        }
    }`,

    professionJsonFemale: `{
        "count": 5,
        "list": {     
            "id_1": "Швея",
            "id_2": "Домохозяйка",
            "id_3": "Медсестра",
            "id_4": "Няня",
            "id_5": "Стюардесса"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
 
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    /*генерация пола*/
    randomGender: function() {
        return (this.randomIntNumber()===0) ? this.GENDER_MALE:this.GENDER_FEMALE;
    },

    
    /*генерация года рождения*/
    randomBirthYear: function() {
        return this.randomIntNumber(1920, 2000);
    },

    /*генерация месяца рождения*/
    randomBirthMonthDay: function() {
        let numMonth = this.randomIntNumber(1, 12);
        let arr_month = [["января", 31], 
                         ["февраля", 28],
                         ["марта", 31],
                         ["апреля", 30],
                         ["мая", 31],
                         ["июня", 30],
                         ["июля", 31],
                         ["августа", 31], 
                         ["сентября",30],
                         ["октября", 31],
                         ["ноября", 30],
                         ["декабря", 31]];
        let numDay = this.randomIntNumber(1, arr_month[numMonth-1][1]);                 
        return numDay + " " + arr_month[numMonth-1][0]; 
    },

    /*генерация имени в зависимости от пола*/
    randomFirstName: function(gender) {
        return (gender === this.GENDER_MALE) ? 
                this.randomValue(this.firstNameMaleJson):
                this.randomValue(this.firstNameFemaleJson);
    },

    /*генерация отчества*/
    randomSecondName: function(gender) {
        let secondname_tmp = this.randomValue(this.secondNameJson);
        if (gender == this.GENDER_MALE)
            secondname_tmp = secondname_tmp + 'ич';
        else
            secondname_tmp = secondname_tmp + "нa";

        return secondname_tmp;
    },

    /*генерация фамилии*/
    randomSurname: function(gender) {
        let surname_tmp;
        if (gender == this.GENDER_MALE)
            surname_tmp = this.randomValue(this.surnameJson);
        else
            surname_tmp = this.randomValue(this.surnameJson)+"a";

        return surname_tmp;
    },

    
    /*генерация профессии в зависимости от пола*/
    randomProfession: function(gender) {
        let n = this.randomIntNumber();
        if (n == 0)
            return this.randomValue(this.professionJsonCommon);
        else { 
            if (gender == this.GENDER_MALE) 
                return this.randomValue(this.professionJsonMale);
            else
                return this.randomValue(this.professionJsonFemale);
        }
    },

    getPerson: function () {
        this.person = {};
        let gender = this.randomGender();
        this.person.gender = gender;
        this.person.firstName = this.randomFirstName(gender);
        this.person.secondName = this.randomSecondName(gender);
        this.person.surname = this.randomSurname(gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMontDay = this.randomBirthMonthDay();
        this.person.profession = this.randomProfession(gender);
        return this.person;
    }
};
