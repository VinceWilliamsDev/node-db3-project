const express = require('express')
const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
    
}

function findById(id) {
    return db('schemes')
        .where('id', id)
        .then(scheme => {
            if (scheme.length < 1) {
                return null
            } else {
                return scheme[0]
            }
        })
        .catch(err => {
            return err
        })
}

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .where('steps.scheme_id', id)
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(id => {
            return findById(id)
                .then(newScheme => {
                    return newScheme
                })
                .catch(err => {
                    return err
                })
        })
        .catch(err => {
            return err
        })
}

function update(changes, id) {
    console.log(changes)
    return db('schemes')
        .where('id', id)
        .update(changes, 'id')
        .then(id => {
            return findById(id)
                .then(updatedScheme => {
                    return updatedScheme
                })
                .catch(err => {
                    return err
                })
        })
        .catch(err => {
            return err
        })
        
}

function remove(id) {
    return null
}