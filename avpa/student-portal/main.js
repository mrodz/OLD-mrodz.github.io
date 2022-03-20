if (!supportsTemplate()) {
    alert('This page will not work in this browser! Please switch to a newer version.')
}

const informationPanelContent = {
    date: '2022',
    websiteName: 'My Failing Students',
    versionId: 'SIS v7.5.2',
    districtName: 'Culver City Unified'
}
const informationPanel = document.querySelector('[data-information-panel]')
const wrapper = document.querySelector('[data-panel-wrapper]')

console.log(informationPanel);

const template = informationPanel.content.cloneNode(true).children[0]

const date = template.querySelector('[data-date]')
const websiteName = template.querySelector('[data-website-name]')
const versionId = template.querySelector('[data-version-id]')
const districtName = template.querySelector('[data-district-name]')

date.textContent = informationPanelContent.date
websiteName.textContent = informationPanelContent.websiteName
versionId.textContent = informationPanelContent.versionId
districtName.textContent = informationPanelContent.districtName


console.log(template)

wrapper.append(template)
// document.append(template)

function supportsTemplate() {
    return 'content' in document.createElement('template');
}

function elementToString(element) {
    
}