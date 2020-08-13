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
}

function findSteps(id) {
    return null
}

function add(scheme) {
    return null
}

function update(changes, id) {
    return null
}

function remove(id) {
    return null
}