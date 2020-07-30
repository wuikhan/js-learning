var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+timeOfDay+' Ladie\'s & Gentlemen ! I\'m ' +this.name + ', I\'m a '+this.job+' and I\'m '+this.age+' years old'+' have a nice '+timeOfDay);
        } else if (style === 'friendly'){
            console.log('Hey !!! What\'s up ... '+timeOfDay+' Ladie\'s & Gentlemen ! I\'m ' +this.name + ', I\'m a '+this.job+' and I\'m '+this.age+' years old'+
            'have a nice '+timeOfDay);
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily,'friendly','afternoon');

// john.presentation.apply(emily,['friendly','afternoon']); currently this will not work because in the above function we are not accepting array

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');