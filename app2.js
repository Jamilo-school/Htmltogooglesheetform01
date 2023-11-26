// Define default data
const defaultData = [
    {
      AdmissionNo:  " Found Adm No 02",
      StudentFullName:"Tom Allan ",
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
      AdmissionNo: " Found Adm No 002",
      StudentFullName:"kssko",
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
      AdmissionNo: "Geofrey",
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
    document.querySelector('input[name="Admission No"]').value = data.AdmissionNo || '';
    document.querySelector('input[name="StudentFullName"]').value = data.StudentFullName || '';
    document.querySelector('select[name="Gender"]').value = data.Gender || '';
    document.querySelector('input[name="Admission Class"]').value = data.AdmissionClass || '';
    document.getElementById('Assessment Number').value = data.AssessmentNumber || '';
    document.querySelector('input[name="U.P.I"]').value = data.UPI || '';
    document.querySelector('input[type="tel"]').value = data.PhoneNumber || '';
    document.querySelector('input[type="email"]').value = data.OfficialEmail || '';
    document.querySelector('select[name="🐏 Class Teacher"]').value = data.ClassTeacher || '';
    document.querySelector('input[name="Parent/Guardian Name"]').value = data.ParentGuardianName || '';
    document.querySelector('input[name="Phone Number"]').value = data.ParentGuardianPhoneNumber || '';
  }
  
  // Function to filter data based on a specific condition (e.g., name)
  function filterDataByName(AdmissionNo) {
    return defaultData.filter(item => item.AdmissionNo.toLowerCase().includes(AdmissionNo.toLowerCase()));
  }
  
  // Function to handle live filtering and form population
  function handleLiveFiltering(inputValue) {
    const filteredData = filterDataByName(inputValue);
    if (filteredData.length > 0) {
      populateForm(filteredData[0]); // Assuming only the first match will be used
      // Optionally, you can perform additional actions here when data is found
    } else {
      // Optionally, handle no data found scenario
      populateForm({}); // Clear the form if no data found
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="search"]');
  
    searchInput.addEventListener('input', function(event) {
      const inputValue = event.target.value.trim();
      handleLiveFiltering(inputValue);
    });
  });
  