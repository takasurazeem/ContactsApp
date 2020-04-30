import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

// renderItem = obj => <Row { name={obj.item.name} phone={obj.item.phone}} />
// item: { name: String, phone: String }
const renderItem = ({ item }) => <Row {...item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const SectionListContacts = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections} />
    )
}

SectionListContacts.propTypes = {
    renderItem: PropTypes.func,
    renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

export default SectionListContacts