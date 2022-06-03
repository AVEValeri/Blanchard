// BEGIN === INIT SELCET === //
const gallerySelect = document.getElementById('gallery_select');

const choices = new Choices(gallerySelect, {
  searchEnabled: false,
  itemSelectText: '',
  duplicateItemsAllowed: false,
});
// END === INIT SELCET === //

// BEGIN === REMOVE SELECTED VALUE === //
gallerySelect.addEventListener('change', () => {
  removeSelectedValue()
})

function removeSelectedValue() {
  let selectValue = gallerySelect.value
  console.log(selectValue.length);
}
// END === REMOVE SELECTED VALUE === //

