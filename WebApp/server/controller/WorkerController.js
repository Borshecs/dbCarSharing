var Workerdb = require('../model/Worker')

exports.create = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Content can not be empty'})
    }

    const worker = new Workerdb({
        Surname: req.body.Surname,
        Name: req.body.Name,
        Patronymic: req.body.Patronymic,
        Adress: req.body.Adress,
        Phone: req.body.Phone
    })

    worker.save(worker).then(data=>{
            //res.send(data)
            res.redirect('/add_worker')
        })
        .catch(e=>{
            res.status(500).send({message: e.message || "Some error occurred while creating a create operation!"})
        })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        Workerdb.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot find customer with' + id + '. Maybe customer not found!'})
            }else{
                res.send(data)
            }
        }).catch(e => {
            res.status(500).send({message: 'Error update customer information!'})
        })

    }else{
        Workerdb.find().then(worker => {
            res.send(worker)        
        }).catch(e => {
            res.status(500).send({message: e.message || "Error occurred while retriving customer information!"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty!'})
    }

    const id = req.params.id
    Workerdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot update customer with' + id + '. Maybe customer not found!'})
        }else{
            res.send(data)
        }
    }).catch(e => {
        res.status(500).send({message: 'Error update customer information!'})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    Workerdb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot delete customer with' + id + '. Maybe customer not found!'})
        }else{
            res.send({message: 'Customer was deleted successfully!'})
        }
    }).catch(e => {
        res.status(500).send({message: 'Could not delete customer with id =' + id})
    })
}