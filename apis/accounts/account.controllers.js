let accounts = require('../../accounts');

exports.fetchAccount = (req, res) => { // get always status 200
    // res.json(accounts);
    res.status(200).json(accounts);
}

exports.createAccount = (req, res) => { // post always status 201
    const id = accounts.length + 1;
    req.body.id = id;
    accounts.push(req.body);
    res.status(201).json(req.body);
}

exports.updateAccount = (req, res) => { // put always status 
    const { accountId } = req.params;
    const account = accounts.find(element => element.id === +accountId);
    if(account){
        for(const key in req.body){
            account[key] = req.body[key];
        }
        res.json(account);
    } else{res.status(404).json({message: "Account dosnt exist!"})}
}

exports.deleteAccount = (req, res) => { // delete always status 204 
    const { accountId } = req.params;
    const account = accounts.find(element => element.id === +accountId);
    if(account){
        accounts = accounts.filter(element => element.id !== +accountId);
        res.status(204).end();
    } else{res.status(404).json({message: "Account dosnt exist!"})}
}