// Define default data
const defaultData = [
    {
      StudentFullName:  "Abeka ",
      AdmissionNo:"39741064001",
      Gender:"Male",
      AdmissionClass: "Form Four west",
      AssessmentNumber: "B000123456",
      UPI: "A00090090",
      PhoneNumber: "254909000999",
      OfficialEmail: "Allanohn@example.com",
      ClassTeacher: "🧑‍⚕️ Mr Oduor Geofrey Onyango",
      ParentGuardianName: "ADARA MADoe",
      ParentGuardianPhoneNumber: "6th-july-1998"
    },
    {
      StudentFullName: "eje Apondi Obadha",
      AdmissionNo:"kssko",
      Gender:"Female",
      AdmissionClass: "ppppp",
      AssessmentNumber: "B000156",
      UPI: "B00098",
      PhoneNumber: "0922",
      OfficialEmail: "shwhn@example.com",
      ClassTeacher: "Mr Allan Tom Onyango",
      ParentGuardianName: "dmsk Doe",
      ParentGuardianPhoneNumber: "4-yyy-yyyy"
    },
    {
      StudentFullName: "ej",
      AdmissionNo:"kssko",
      Gender:"Female",
      AdmissionClass: "🧑‍⚕️ Form One",
      AssessmentNumber: "B00300006",
      UPINumber: "B000987787",
      PhoneNumber: "254-xxx-xxxx",
      OfficialEmail: "john@example.comoeeeeeeeeeeeeee",
      ClassTeacher: "Mr Allan Tom Onyango",
      ParentGuardianName: "Jane Doe",
      ParentGuardianPhoneNumber: "254-yyy-yyyy"
    },
    // Add more default data objects as needed
  ];
  
 // Function to populate the form with data
function populateForm(data) {
  document.querySelector('input[name="StudentFullName"]').value = data.StudentFullName || '';
  document.querySelector('input[name="Admission No"]').value = data.AdmissionNo || '';
  document.querySelector('select[name="Gender"]').value = data.Gender || '';
  document.querySelector('input[name="Admission Class"]').value = data.AdmissionClass || '';
  document.getElementById('Assessment Number').value = data.AssessmentNumber || '';
  document.querySelector('input[name="U.P.I"]').value = data.UPI || '';
  document.querySelector('input[type="tel"]').value = data.PhoneNumber || '';
  document.querySelector('input[type="email"]').value = data.OfficialEmail || '';
  document.querySelector('select[name="🐏 Class Teacher"]').value = data.ClassTeacher || '';
  document.querySelector('input[name="Parent/Guardian Name"]').value = data.ParentGuardianName || '';
  document.querySelector('input[name="Phone Number"]').value = data.ParentGuardianPhoneNumber || '';

  // Populate other form fields similarly
}

// Function to filter data based on the first three letters of the input (e.g., name)
function filterDataByName(StudentFullName) {
  const inputFirstThreeLetters = StudentFullName.toLowerCase().slice(0, 2);
  return defaultData.filter(
    item => item.StudentFullName.toLowerCase().slice(0, 2) === inputFirstThreeLetters
  );
}

// Function to handle no data found scenario with SweetAlert
function handleNoDataFound() {
  Swal.fire({
    icon: 'error',
    title: 'No Matching Data Found!',
    text: 'Please refine your search by \n typing First two letters of the Christian name',
    timer: 5000, // Display alert for 5 seconds
  });
}

// Function to handle live filtering and form population
function handleLiveFiltering(inputValue) {
  if (inputValue.length < 2) {
    return; // If less than 3 characters, do not perform filtering or show the pop-up
  }

  const filteredData = filterDataByName(inputValue);

  if (filteredData.length > 0) {
    // Populate the form with the first match by default
    populateForm(filteredData[0]);

    // Prepare the title with the total matching words found
    const totalMatches = filteredData.length;
    const titleText = `{ ${totalMatches} } Matching Name${totalMatches > 1 ? 's' : ''} Found`;

    // Show the SweetAlert with a select input
    Swal.fire({
      title: titleText,
      input: 'select',
      inputOptions: filteredData.reduce((options, data, index) => {
        options[index] = data.StudentFullName; // Assuming StudentFullName is unique
        return options;
      }, {}),
      inputPlaceholder: '',
      showCancelButton: true,
      didOpen: () => {
        const selectInput = Swal.getInput();
        selectInput.addEventListener('change', function(event) {
          const selectedIndex = event.target.value;
          populateForm(filteredData[selectedIndex]);
        });
      },
    });
  } else {
    handleNoDataFound(); // Call the function to show the alert
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="search"]');

  searchInput.addEventListener('input', function(event) {
    const inputValue = event.target.value.trim();
    handleLiveFiltering(inputValue);
  });
});
