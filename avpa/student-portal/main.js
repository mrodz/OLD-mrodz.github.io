const wrapper = document.querySelector('[data-panel-wrapper]')
const informationPanelContent = {
    date: '2022',
    websiteName: 'My Failing Students',
    versionId: 'SIS v7.5.2',
    districtName: 'Culver City Unified'
}

if (supportsTemplate()) {
    const informationPanel = document.querySelector('[data-information-panel]')
    
    const template = informationPanel.content.cloneNode(true).children[0]
    
    const date = template.querySelector('[data-date]')
    const websiteName = template.querySelector('[data-website-name]')
    const versionId = template.querySelector('[data-version-id]')
    const districtName = template.querySelector('[data-district-name]')
    
    date.textContent = informationPanelContent.date
    websiteName.textContent = informationPanelContent.websiteName
    versionId.textContent = informationPanelContent.versionId
    districtName.textContent = informationPanelContent.districtName
    
    wrapper.append(template)
} else {
    alert('does not support')
    const div = document.createElement('div');
    div.innerHTML = '&copy; 2022 - My Failing Students LLC';
    wrapper.append()
}
// document.append(template)

function supportsTemplate() {
    return 'content' in document.createElement('template');
}