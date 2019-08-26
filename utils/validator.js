
function newValidator() {
    const validator = {};

    validator.isEmail = function(value, rule){
            if(Boolean(rule.value)){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        }
        return true;
    }

    validator.notEmpty = function(value, rule){
        if(Boolean(rule.value)){
            return String(value).length !== 0;
        }
        return true;
    }
    validator.minLength = function(value, rule){
        return String(value).length >= rule.value
    }
    validator.isMatching = function(value, rule){
        return String(value) === String(rule.value);
    }
    validator.validate = function(object, rules){
        //validate here
        const errors = {};
        const keys = Object.keys(rules);
        for(const key of keys){
            const value = object[key];
            for (const rule of rules[key]){
            const ruleName = rule.rule;
            const isPassed = validator[ruleName](value, rule);
            // console.log(isPassed)
            if(isPassed === false){
                const error = new Error(ruleName);
                if(Array.isArray(errors[key]) && errors[key].length !== 0) {
                    errors[key].push(error);
                } else {
                    errors[key] = [error];
                }
            }
        }
    }
        return errors;
    }
    return validator;
}

export default newValidator;