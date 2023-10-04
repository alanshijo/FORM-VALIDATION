const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const joiningDate = document.getElementById('joiningDate');
const employeeCode = document.getElementById('employeeCode');
const employeeAddr = document.getElementById('employeeAddr');
const employType = document.getElementById('employType');
const designation = document.getElementById('designation');
const department = document.getElementById('department');
const project = document.getElementById('project');
const buddy = document.getElementById('buddy');
const manager = document.getElementById('manager');
const probationStatus = document.getElementById('probationStatus');
const probationPeriod = document.getElementById('probationPeriod');
const workStatus = document.getElementById('workStatus');
const salary = document.getElementById('salary');
const dailyWorkHours = document.getElementById('dailyWorkHours');
const weeklyWorkHours = document.getElementById('weeklyWorkHours');
const panNumber = document.getElementById('panNumber');
const aadharNumber = document.getElementById('aadharNumber');
const btnSave = document.getElementById('save');
const btnDiscard = document.getElementById('discard');
const form = document.querySelector('form');
const li = document.querySelectorAll('.card .tabs li');
const content = document.querySelectorAll('.content');
const modalBody = document.querySelector('.modal .content .body');
li.forEach((element, index) => {
  element.addEventListener('click', () => {
    li.forEach((element) => element.classList.remove('active'));
    element.classList.add('active');
    content.forEach((content) => content.classList.remove('active'));
    content[index + 1].classList.add('active');
  });
});

const validation = (value, pattern, error, msg) => {
  if (value === '') {
    error.innerText = '';
  } else if (pattern.test(value)) {
    error.innerText = '';
    return true;
  } else {
    error.innerText = msg;
    return false;
  }
};

const firstNameValid = (e) => {
  const pattern = /^[A-Za-z]+$/;
  const nameValue = firstName.value;
  const firstNameError = document.getElementById('firstName-error');

  validation(nameValue, pattern, firstNameError, 'Alphabets only');
};
const lastNameValid = (e) => {
  const pattern = /^[A-Za-z]+$/;
  const nameValue = e.target.value;
  const lastNameError = document.getElementById('lastName-error');
  validation(nameValue, pattern, lastNameError, 'Alphabets only');
};

const mailValid = (e) => {
  const pattern = /^[0-9a-zA-Z-_\$#]+@[0-9a-zA-Z-_\$#]+\.[a-zA-Z]{2,5}/;
  const mailValue = e.target.value;
  const mailError = document.getElementById('email-error');
  validation(mailValue, pattern, mailError, "Email isn't valid");
};
const mobileValid = (e) => {
  const pattern = /^(?!(\d)\1{9})(?!0123456789|1234567890|0987654321)\d{10}$/;
  const mobValue = e.target.value;
  const mobError = document.getElementById('mob-error');
  validation(mobValue, pattern, mobError, 'Invalid mobile number');
};

function requiredValid() {
  function validateFields(name, pattern) {
    return pattern.test(name.value);
  }
  const isFirstNameValid = validateFields(firstName, /^[A-Za-z]+$/);
  const isLastNameValid = validateFields(lastName, /^[A-Za-z]+$/);
  const isMailValid = validateFields(
    email,
    /^[0-9a-zA-Z-_\$#]+@[0-9a-zA-Z-_\$#]+\.[a-zA-Z]{2,5}/
  );
  const isMobileValid = validateFields(
    mobile,
    /^(?!(\d)\1{9})(?!0123456789|1234567890|0987654321)\d{10}$/
  );
  if (
    firstName.value === '' ||
    lastName.value === '' ||
    dob.value === '' ||
    gender.value === '' ||
    email.value === '' ||
    mobile.value === '' ||
    joiningDate.value === '' ||
    employeeCode.value === '' ||
    employeeAddr.value === '' ||
    employType.value === '' ||
    designation.value === '' ||
    department.value === '' ||
    project.value === '' ||
    buddy.value === '' ||
    manager.value === '' ||
    probationStatus.value === '' ||
    probationPeriod.value === '' ||
    workStatus.value === '' ||
    salary.value === '' ||
    dailyWorkHours.value === '' ||
    weeklyWorkHours.value === '' ||
    panNumber.value === '' ||
    aadharNumber.value === ''
  ) {
    const msg = 'This field is required';
    document.getElementById('firstName-error').innerText =
      firstName.value === '' ? msg : isFirstNameValid ? '' : 'Alphabets only';

    document.getElementById('lastName-error').innerText =
      lastName.value === '' ? msg : isLastNameValid ? '' : 'Alphabets only';

    document.getElementById('dob-error').innerText =
      dob.value === '' ? msg : '';

    document.getElementById('gender-error').innerText =
      gender.value === '' ? msg : '';

    document.getElementById('email-error').innerText =
      email.value === '' ? msg : isMailValid ? '' : `Email isn't valid`;

    document.getElementById('mob-error').innerText =
      mobile.value === '' ? msg : isMobileValid ? '' : 'Invalid mobile number';

    document.getElementById('joiningDate-error').innerText =
      joiningDate.value === '' ? msg : '';

    document.getElementById('employCode-error').innerText =
      employeeCode.value === '' ? msg : '';

    document.getElementById('address-error').innerText =
      employeeAddr.value === '' ? msg : '';

    document.getElementById('employType-error').innerText =
      employType.value === '' ? msg : '';

    document.getElementById('designation-error').innerText =
      designation.value === '' ? msg : '';

    document.getElementById('department-error').innerText =
      department.value === '' ? msg : '';

    document.getElementById('project-error').innerText =
      project.value === '' ? msg : '';

    document.getElementById('buddy-error').innerText =
      buddy.value === '' ? msg : '';

    document.getElementById('manager-error').innerText =
      manager.value === '' ? msg : '';

    document.getElementById('probationStatus-error').innerText =
      probationStatus.value === '' ? msg : '';

    document.getElementById('probationPeriod-error').innerText =
      probationPeriod.value === '' ? msg : '';

    document.getElementById('workStatus-error').innerText =
      workStatus.value === '' ? msg : '';

    document.getElementById('salary-error').innerText =
      salary.value === '' ? msg : '';

    document.getElementById('dailyWorkHours-error').innerText =
      dailyWorkHours.value === '' ? msg : '';

    document.getElementById('weeklyWorkHours-error').innerText =
      weeklyWorkHours.value === '' ? msg : '';

    document.getElementById('panNumber-error').innerText =
      panNumber.value === '' ? msg : '';
    document.getElementById('aadharNumber-error').innerText =
      aadharNumber.value === '' ? msg : '';

    firstName.addEventListener('input', () => {
      document.getElementById('firstName-error').innerText =
        firstName.value === '' ? msg : '';
    });
    lastName.addEventListener('input', () => {
      document.getElementById('lastName-error').innerText =
        lastName.value === '' ? msg : '';
    });

    dob.addEventListener('input', () => {
      document.getElementById('dob-error').innerText =
        dob.value === '' ? msg : '';
    });
    gender.addEventListener('input', () => {
      document.getElementById('gender-error').innerText =
        gender.value === '' ? msg : '';
    });
    email.addEventListener('input', () => {
      document.getElementById('email-error').innerText =
        email.value === '' ? msg : '';
    });
    mobile.addEventListener('input', () => {
      document.getElementById('mob-error').innerText =
        mobile.value === '' ? msg : '';
    });
    joiningDate.addEventListener('input', () => {
      document.getElementById('joiningDate-error').innerText =
        joiningDate.value === '' ? msg : '';
    });
    employeeCode.addEventListener('input', () => {
      document.getElementById('employCode-error').innerText =
        employeeCode.value === '' ? msg : '';
    });
    employeeAddr.addEventListener('input', () => {
      document.getElementById('address-error').innerText =
        employeeAddr.value === '' ? msg : '';
    });
    employType.addEventListener('input', () => {
      document.getElementById('employType-error').innerText =
        employType.value === '' ? msg : '';
    });
    designation.addEventListener('input', () => {
      document.getElementById('designation-error').innerText =
        designation.value === '' ? msg : '';
    });
    department.addEventListener('input', () => {
      document.getElementById('department-error').innerText =
        department.value === '' ? msg : '';
    });
    project.addEventListener('change', () => {
      document.getElementById('project-error').innerText =
        project.value === '' ? msg : '';
    });
    buddy.addEventListener('input', () => {
      document.getElementById('buddy-error').innerText =
        buddy.value === '' ? msg : '';
    });
    manager.addEventListener('input', () => {
      document.getElementById('manager-error').innerText =
        manager.value === '' ? msg : '';
    });
    probationStatus.addEventListener('input', () => {
      document.getElementById('probationStatus-error').innerText =
        probationStatus.value === '' ? msg : '';
    });
    probationPeriod.addEventListener('input', () => {
      document.getElementById('probationPeriod-error').innerText =
        probationPeriod.value === '' ? msg : '';
    });
    workStatus.addEventListener('input', () => {
      document.getElementById('workStatus-error').innerText =
        workStatus.value === '' ? msg : '';
    });
    salary.addEventListener('input', () => {
      document.getElementById('salary-error').innerText =
        salary.value === '' ? msg : '';
    });
    dailyWorkHours.addEventListener('input', () => {
      document.getElementById('dailyWorkHours-error').innerText =
        dailyWorkHours.value === '' ? msg : '';
    });
    weeklyWorkHours.addEventListener('input', () => {
      document.getElementById('weeklyWorkHours-error').innerText =
        weeklyWorkHours.value === '' ? msg : '';
    });
    panNumber.addEventListener('input', () => {
      document.getElementById('panNumber-error').innerText =
        panNumber.value === '' ? msg : '';
    });
    aadharNumber.addEventListener('input', () => {
      document.getElementById('aadharNumber-error').innerText =
        aadharNumber.value === '' ? msg : '';
    });

    return false;
  } else {
    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isMailValid ||
      !isMobileValid
    ) {
      return false;
    } else {
      return true;
    }
  }
}

const onSubmit = (e) => {
  e.preventDefault();

  if (requiredValid()) {
    const options = project.selectedOptions;
    const values = Array.from(options).map(({ value }) => value);
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dob: dob.value,
      gender: gender.value,
      email: email.value,
      mobile: mobile.value,
      joiningDate: joiningDate.value,
      employeeCode: employeeCode.value,
      employeeAddr: employeeAddr.value,
      employType: employType.value,
      designation: designation.value,
      department: department.value,
      project: values,
      buddy: buddy.value,
      manager: manager.value,
      probationStatus: probationStatus.value,
      probationPeriod: probationPeriod.value,
      workStatus: workStatus.value,
      salary: salary.value,
      dailyWorkHours: dailyWorkHours.value,
      weeklyWorkHours: weeklyWorkHours.value,
      panNumber: panNumber.value,
      aadharNumber: aadharNumber.value,
    };
    showData(employee);

    document.getElementById('editButton').addEventListener('click', () => {
      modalBody.innerHTML = '';
      modal.style.display = 'none';
      btnSave.innerText = 'Update';
      btnSave.id = 'updateBtn';
    });
  }
};
const showData = (employee) => {
  const ul = document.createElement('ul');
  modalBody.style.position = 'relative';
  modalBody.appendChild(ul);
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  const li7 = document.createElement('li');
  const li8 = document.createElement('li');
  const li9 = document.createElement('li');
  const li10 = document.createElement('li');
  const li11 = document.createElement('li');
  const li12 = document.createElement('li');
  const li13 = document.createElement('li');
  const li14 = document.createElement('li');
  const li15 = document.createElement('li');
  const li16 = document.createElement('li');
  const li17 = document.createElement('li');
  const li18 = document.createElement('li');
  const li19 = document.createElement('li');
  const li20 = document.createElement('li');
  const li21 = document.createElement('li');
  const li22 = document.createElement('li');
  const li23 = document.createElement('li');

  li1.innerText = `First Name: ${employee.firstName}`;
  li2.innerText = `Last Name: ${employee.lastName}`;
  li3.innerText = `Date of Birth: ${employee.dob}`;
  li4.innerText = `Gender: ${employee.gender}`;
  li5.innerText = `Email: ${employee.email}`;
  li6.innerText = `Mobile: ${employee.mobile}`;
  li7.innerText = `Joining Date: ${employee.joiningDate}`;
  li8.innerText = `Employee Code: ${employee.employeeCode}`;
  li9.innerText = `Employee Address: ${employee.employeeAddr}`;
  li10.innerText = `Employee Type: ${employee.employType}`;
  li11.innerText = `Designation: ${employee.designation}`;
  li12.innerText = `Department: ${employee.department}`;
  li13.innerText = `Project: ${employee.project}`;
  li14.innerText = `Buddy: ${employee.buddy}`;
  li15.innerText = `Manager: ${employee.manager}`;
  li16.innerText = `Probation Status: ${employee.probationStatus}`;
  li17.innerText = `Probation Period: ${employee.probationPeriod}`;
  li18.innerText = `Work Status: ${employee.workStatus}`;
  li19.innerText = `Salary: ${employee.salary}`;
  li20.innerText = `Daily Work Hours: ${employee.dailyWorkHours}`;
  li21.innerText = `Weekly Work Hours: ${employee.weeklyWorkHours}`;
  li22.innerText = `PAN Number: ${employee.panNumber}`;
  li23.innerText = `Aadhar Number: ${employee.aadharNumber}`;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  ul.appendChild(li8);
  ul.appendChild(li9);
  ul.appendChild(li10);
  ul.appendChild(li10);
  ul.appendChild(li12);
  ul.appendChild(li13);
  ul.appendChild(li14);
  ul.appendChild(li15);
  ul.appendChild(li16);
  ul.appendChild(li17);
  ul.appendChild(li18);
  ul.appendChild(li19);
  ul.appendChild(li20);
  ul.appendChild(li21);
  ul.appendChild(li22);
  ul.appendChild(li23);

  // Edit Button

  const editButton = document.createElement('button');
  editButton.id = 'editButton';
  editButton.style.backgroundColor = '#20c997';
  editButton.style.color = '#fff';
  editButton.style.border = 'none';
  editButton.style.padding = '8px 18px';
  editButton.style.borderRadius = '4px';
  editButton.style.fontWeight = '700';
  editButton.style.position = 'absolute';
  editButton.style.top = '0';
  editButton.style.right = '0';
  editButton.style.cursor = 'pointer';
  editButton.innerText = 'Edit';
  modalBody.appendChild(editButton);
  modal.style.display = 'block';
};
firstName.addEventListener('keyup', firstNameValid);
lastName.addEventListener('keyup', lastNameValid);
email.addEventListener('keyup', mailValid);
mobile.addEventListener('keyup', mobileValid);
form.addEventListener('submit', onSubmit);
btnDiscard.addEventListener('click', () => {
  $('.multiple-select').val('').trigger('change');
});
$('.multiple-select').on('change', function () {
  document.getElementById('project-error').innerText = '';
});
// ---Modal---
const modal = document.getElementById('showDetails');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modalBody.innerHTML = '';
  modal.style.display = 'none';
});

// Mobile
const hamburger = document.querySelectorAll('.hamburger');
const navClose = document.querySelector('.nav-close');
const mobileNav = document.querySelector('.mobileNav');
hamburger.forEach((element) => {
  element.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
  });
});

navClose.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

const mobLi = document.querySelectorAll('.mobileNav .tabs li');

mobLi.forEach((element, index) => {
  element.addEventListener('click', () => {
    mobLi.forEach((element) => element.classList.remove('active'));
    element.classList.add('active');
    content.forEach((content) => content.classList.remove('active'));
    content[index + 1].classList.add('active');
    mobileNav.style.display = 'none';
  });
});
