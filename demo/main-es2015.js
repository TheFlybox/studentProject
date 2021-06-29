(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/iPF":
/*!***********************************************************************!*\
  !*** ./src/app/student/student-reports/student-reports.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gorgojoso\Desktop\deployangular\src\main.ts */"zUnb");


/***/ }),

/***/ "38i2":
/*!****************************************************************!*\
  !*** ./src/app/student/student-card/student-card.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCard", function() { return StudentCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_student_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-card.component.html */ "XAy1");
/* harmony import */ var _student_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-card.component.css */ "XLIR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/student.service */ "JmRu");





let StudentCard = class StudentCard {
    constructor(studentService) {
        this.studentService = studentService;
        this.fileURL = '';
        this.fileName = '';
        this.deleteModal = false;
    }
    ngOnInit() {
        if (this.student.biography !== undefined && this.student.biography !== null) {
            console.log(this.student.biography);
            this.fileURL = this.student.biography.url;
            this.fileName = this.student.biography.name;
        }
    }
    toggleDropdown(pos) {
        console.log(pos);
        if (this.togglers[pos] === 0)
            this.togglers[pos] = 1;
        else
            this.togglers[pos] = 0;
    }
    clearTogglers() {
        this.togglers = this.togglers.map(x => 0);
    }
    documentClick(event) {
        let el = event.target.classList;
        if (!el.contains("toggler")) {
            this.clearTogglers();
        }
    }
    deleteStudent() {
        this.studentService.deleteStudent(this.student);
        this.clearTogglers();
        this.toggleDeleteModal();
    }
    checkBio() {
        let res = false;
        if (!this.student.biography)
            res = true;
        else {
            if (!this.student.biography.name)
                res = true;
        }
        return res;
    }
    goToLink(url) {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.setAttribute("download", this.fileName);
            a.click();
        });
    }
    toggleDeleteModal() {
        this.deleteModal = !this.deleteModal;
    }
};
StudentCard.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] }
];
StudentCard.propDecorators = {
    student: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    documentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:click', ['$event'],] }]
};
StudentCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'student-card',
        template: _raw_loader_student_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentCard);



/***/ }),

/***/ "7V64":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/student/student-upload/student-upload.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pl-6 pt-4 pb-4\">\r\n  <h1 class=\"title\">Upload file</h1>\r\n  <h2 class=\"subtitle\">Upload list of students</h2>\r\n  <form>\r\n    <div class=\"field\">\r\n      <label class=\"label\">File (XML)</label>      \r\n      <div class=\"file has-name is-boxed\">\r\n        <label class=\"file-label\">\r\n          <input class=\"file-input\" type=\"file\" name=\"resume\" (change)=\"changeFileName($event)\" accept=\"text/xml\">\r\n          <span class=\"file-cta\">\r\n            <span class=\"file-icon\">\r\n              <i class=\"ti ti-upload\"></i>\r\n            </span>\r\n            <span class=\"file-label\">\r\n              Choose a file…\r\n            </span>\r\n          </span>\r\n          <span class=\"file-name\">\r\n            {{fileNameToUpload}}\r\n          </span>\r\n        </label>\r\n      </div>\r\n      <br />\r\n      <span>Please be sure is a valid XML file*</span>\r\n    </div>\r\n    <div class=\"buttons mt-4\">\r\n      <div class=\"control mr-4\">\r\n        <button type=\"button\" class=\"button is-success is-fullwidth\" (click)=\"onSubmit()\">\r\n          <span class=\"icon\">\r\n            <i class=\"ti ti-upload\"></i>\r\n          </span>\r\n          <span>Upload</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"control\">\r\n        <button type=\"button\" class=\"button is-danger is-fullwidth\" (click)=\"goBack()\">\r\n          <span class=\"icon\">\r\n            <i class=\"ti ti-x\"></i>\r\n          </span>\r\n          <span>Cancel</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "9+2A":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/student/student-list/student-list.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-4\">\r\n  <h1 class=\"title\">Student List</h1>\r\n  <h2 class=\"subtitle\">The details of all students</h2>\r\n\r\n  <div class=\"columns\">\r\n    <div class=\"column is-two-thirds\">\r\n      <div class=\"field has-addons\">\r\n        <div class=\"control is-expanded\">\r\n          <input class=\"input\" type=\"text\" placeholder=\"Find a student\" (input)=\"changeEverything($event)\">\r\n        </div>\r\n        <div class=\"control\">\r\n          <a class=\"button is-link\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ti ti-search\"></i>\r\n            </span>\r\n            <span>Search</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <div class=\"is-flex\">\r\n        <div class=\"ml-auto\">\r\n          <a class=\"button is-link\" routerLink=\"create\" [state]=\"{student: null, isCreate: true}\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ti ti-plus\"></i>\r\n            </span>\r\n            <span>Create</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"s\" *ngFor=\"let student of studentList | async; let i = index\" [attr.data-index]=\"i\">\r\n    <student-card [student]=\"student\" [index]=\"i\" [togglers]=\"togglers\"></student-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container p-4\">\r\n  <nav class=\"pagination\" role=\"navigation\" aria-label=\"pagination\">\r\n    <a class=\"pagination-previous\" title=\"This is the first page\" disabled>Previous</a>\r\n    <a class=\"pagination-next\">Next</a>\r\n    <ul class=\"pagination-list\">\r\n      <li>\r\n        <a class=\"pagination-link is-current\" aria-label=\"Page 1\" aria-current=\"page\">1</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>");

/***/ }),

/***/ "9Vy1":
/*!********************************************************************!*\
  !*** ./src/app/student/student-upload/student-upload.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentUploadComponent", function() { return StudentUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_student_upload_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-upload.component.html */ "7V64");
/* harmony import */ var _student_upload_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-upload.component.css */ "XSuT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/student.service */ "JmRu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "QVs2");
/* harmony import */ var _models_student_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/student.model */ "fF9i");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xml2js */ "bYGl");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_7__);








let StudentUploadComponent = class StudentUploadComponent {
    constructor(studentService, location) {
        this.studentService = studentService;
        this.location = location;
        this.fileNameToUpload = "Empty";
    }
    changeFileName(e) {
        console.log(1);
        const element = e.currentTarget;
        let fileList = element.files;
        if (fileList) {
            this.fileNameToUpload = fileList[0].name;
            this.file = fileList[0];
        }
    }
    readFile(file) {
        let reader = new FileReader();
        let context = this;
        reader.readAsText(file);
        reader.onload = function () {
            context.parseXML(reader.result);
        };
    }
    parseXML(data) {
        let parser = xml2js__WEBPACK_IMPORTED_MODULE_7__["parseString"];
        let fullData = new Array();
        parser(data, function (err, result) {
            let res = result.students.student;
            res.forEach(el => {
                let item = new _models_student_model__WEBPACK_IMPORTED_MODULE_6__["Student"]();
                item.firstname = el.name[0];
                item.lastname = el.lastname[0];
                item.age = el.age[0];
                item.sex = '';
                fullData.push(item);
            });
        });
        this.studentService.bulkInsert(fullData).then(x => {
            console.log("READY NOW");
        });
    }
    onSubmit() {
        if (this.file) {
            this.readFile(this.file);
        }
    }
    goBack() {
        this.location.back();
    }
};
StudentUploadComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
StudentUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'student-upload',
        template: _raw_loader_student_upload_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_upload_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentUploadComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-item.is-active{\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.breadcrumb ul li{\n  display: none;\n}\n\n.breadcrumb .no-hidden{\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItaXRlbS5pcy1hY3RpdmV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnJlYWRjcnVtYiB1bCBsaXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icmVhZGNydW1iIC5uby1oaWRkZW57XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "EpC0":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/student/student-form/student-form.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-4\">\r\n  <div class=\"columns\">\r\n    <div class=\"column is-two-fifths\">\r\n      <h1 class=\"title\">{{formTitle || \"Create a student\"}}</h1>\r\n      <h2 class=\"subtitle\">Please fill the form</h2>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"field\">\r\n          <label class=\"label\">Firstname</label>\r\n          <div class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Insert the firstname\" formControlName=\"firstname\">\r\n          </div>\r\n          <p class=\"help\">Example: Susan</p>\r\n        </div>\r\n        <div class=\"field\">\r\n          <label class=\"label\">Lastname</label>\r\n          <div class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Insert the lastname\" formControlName=\"lastname\">\r\n          </div>\r\n          <p class=\"help\">Example: Brown</p>\r\n        </div>\r\n        <div class=\"columns\">\r\n          <div class=\"column\">\r\n            <div class=\"field\">\r\n              <label class=\"label\">Sex</label>\r\n              <div class=\"control is-expanded\">\r\n                <div class=\"select is-fullwidth\">\r\n                  <select formControlName=\"sex\">\r\n                    <option hidden>Select</option>\r\n                    <option>Male</option>\r\n                    <option>Female</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>            \r\n          </div>\r\n          <div class=\"column\">\r\n            <div class=\"field\">\r\n              <label class=\"label\">Age</label>\r\n              <div class=\"control is-expanded\">\r\n                <div class=\"select is-fullwidth\">\r\n                  <select formControlName=\"age\">\r\n                    <option hidden>Select</option>\r\n                    <option *ngFor=\"let age of ageArray\" [value]=\"age\">{{age}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>          \r\n        </div>\r\n        <div class=\"field\">\r\n          <label class=\"label\">Biography (TXT, PDF, WORD)</label>\r\n          <div class=\"file has-name is-boxed\">\r\n            <label class=\"file-label\">\r\n              <input class=\"file-input\" type=\"file\" name=\"resume\" (change)=\"changeFileName($event)\" accept=\r\n\"application/msword, text/plain, application/pdf\">\r\n              <span class=\"file-cta\">\r\n                <span class=\"file-icon\">\r\n                  <i class=\"ti ti-upload\"></i>\r\n                </span>\r\n                <span class=\"file-label\">\r\n                  Choose a file…\r\n                </span>\r\n              </span>\r\n              <span class=\"file-name\">\r\n                {{fileNameToUpload}}\r\n              </span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"columns mt-2\">\r\n          <div class=\"column\">\r\n            <button type=\"button\" class=\"button is-success is-fullwidth\" (click)=\"onSubmit()\">\r\n              <span class=\"icon\">\r\n                <i class=\"ti ti-checks\"></i>\r\n              </span>\r\n              <span>Save</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"column\">\r\n            <button type=\"button\" class=\"button is-danger is-fullwidth\" (click)=\"goBack()\">\r\n              <span class=\"icon\">\r\n                <i class=\"ti ti-x\"></i>\r\n              </span>\r\n              <span>Cancel</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"mt-6\" [ngClass]=\"{'hidden' : !isCreate}\">\r\n        <label class=\"label\">Upload a list of students</label>\r\n        <a class=\"button is-link mt-1\" routerLink=\"upload\">\r\n          <span class=\"icon\">\r\n            <i class=\"ti ti-upload\"></i>\r\n          </span>\r\n          <span>XML Bulk Upload</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"column is-2\"></div>\r\n    <div class=\"column\">\r\n      <div class=\"pt-6 pr-6\">\r\n        <div class=\"block\">\r\n          <div class=\"is-flex is-align-items-center mb-2\">\r\n            <i class=\"ti ti-bulb is-size-3 mr-3 has-text-link\"></i>\r\n            <span class=\"is-size-4 has-text-weight-bold has-text-grey\">Simple</span>\r\n          </div>    \r\n          <span class=\"has-text-grey ml-5 pl-4 is-block\">\r\n            it's so simple that a <strong>baby</strong> can handle students here.\r\n          </span>      \r\n        </div>\r\n      </div>\r\n      <div class=\"pt-6 pr-6\">\r\n        <div class=\"block\">\r\n          <div class=\"is-flex is-align-items-center mb-2\">\r\n            <i class=\"ti ti-clock is-size-3 mr-3 has-text-link\"></i>\r\n            <span class=\"is-size-4 has-text-weight-bold has-text-grey\">Quick</span>            \r\n          </div>  \r\n          <span class=\"has-text-grey ml-5 pl-4 is-block\">This application is super fast, so much that it can be compared to the <strong>speed of light</strong>.</span>        \r\n        </div>\r\n      </div>\r\n      <div class=\"pt-6 pr-6\">\r\n        <div class=\"block\">\r\n          <div class=\"is-flex is-align-items-center mb-2\">\r\n            <i class=\"ti ti-crown is-size-3 mr-3 has-text-link\"></i>\r\n            <span class=\"is-size-4 has-text-weight-bold has-text-grey\">Elegance</span>            \r\n          </div>  \r\n          <span class=\"has-text-grey ml-5 pl-4 is-block\">A design that gives you satisfaction because we all know that without a little <strong>style</strong> there is no enjoyment.</span>        \r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"container\">\r\n  <div class=\"notification is-success mb-4\" [ngClass]=\"{'hidden' : processCompleted}\">\r\n    <button class=\"delete\"></button>\r\n    <i class=\"ti ti-checks\"></i> Operation completed successfully!\r\n  </div>\r\n</div>");

/***/ }),

/***/ "JmRu":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "ED48");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "PzO/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "zrD2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "CrL0");






let StudentService = class StudentService {
    constructor(firestore, storage, http) {
        this.firestore = firestore;
        this.storage = storage;
        this.http = http;
        this.COLLECTION = 'students';
        this.UPLOADS_BASE = 'uploads';
    }
    getAllStudents() {
        return this.firestore.collection(this.COLLECTION).valueChanges();
    }
    createStudent(student) {
        let id = this.firestore.createId();
        student.id = id;
        student.date = new Date().toLocaleDateString();
        let file = student.biography.file;
        student.biography.file = null;
        this.firestore.collection(this.COLLECTION).doc(id).set(student).then(x => {
            this.createFile(file, student);
        });
    }
    createFile(file, student) {
        let path = `${this.UPLOADS_BASE}/${file.name}`;
        const storageRef = this.storage.ref(path);
        const uploadTask = this.storage.upload(path, file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                this.saveFileURL(file.name, downloadURL, student);
            });
        })).subscribe();
    }
    saveFileURL(name, url, student) {
        student.biography.url = url;
        student.biography.name = name;
        this.firestore.collection(this.COLLECTION).doc(student.id).set(student);
    }
    deleteFile(fileName) {
        const storageRef = this.storage.ref(this.UPLOADS_BASE);
        storageRef.child(fileName).delete();
    }
    deleteStudent(student) {
        if (student.biography) {
            if (student.biography.name) {
                this.deleteFile(student.biography.name);
            }
        }
        this.firestore.collection(this.COLLECTION).doc(student.id).delete();
    }
    updateStudent(student) {
        let file = student.biography.file;
        if (!file) {
            student.biography = null;
            this.firestore.collection(this.COLLECTION).doc(student.id).set(student);
        }
        else {
            student.biography.file = null;
            this.createFile(file, student);
        }
    }
    download(url) {
        console.log(url);
        return this.http.get(url, {
            responseType: 'blob'
        });
    }
    bulkInsert(students) {
        let batch = this.firestore.firestore.batch();
        students.forEach((s) => {
            let doc = this.firestore.collection(this.COLLECTION).doc().ref;
            s.id = doc.id;
            batch.set(doc, { id: s.id, firstname: s.firstname, lastname: s.lastname, age: s.age, sex: s.sex, date: new Date().toLocaleDateString() });
        });
        return batch.commit();
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
StudentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], StudentService);



/***/ }),

/***/ "O8wE":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/student/student-reports/student-reports.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <section class=\"hero\">\r\n    <div class=\"hero-body\">\r\n      <p class=\"title\">\r\n        Student Reports\r\n      </p>\r\n      <p class=\"subtitle\">\r\n        This is a simple page for reports\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <nav class=\"level\">\r\n    <div class=\"level-item has-text-centered has-background-link pt-6 pb-6 has-text-white\">\r\n      <div>\r\n        <p class=\"heading\">MALES</p>\r\n        <p class=\"title has-text-white\">{{males}}</p>\r\n        <p class=\"content mt-4\">Students by male sex</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"level-item has-text-centered has-background-danger pt-6 pb-6 has-text-white\">\r\n      <div>\r\n        <p class=\"heading\">FEMALES</p>\r\n        <p class=\"title has-text-white\">{{females}}</p>\r\n        <p class=\"content mt-4\">Students by female sex</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"level-item has-text-centered has-background-white pt-6 pb-6 has-text-dark\">\r\n      <div>\r\n        <p class=\"heading\">WITH BIOGRAPHY</p>\r\n        <p class=\"title\">{{bio}}</p>\r\n        <p class=\"content mt-4\">Students who has biography</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"level-item has-text-centered has-background-success pt-6 pb-6 has-text-white\">\r\n      <div>\r\n        <p class=\"heading\">TOTAL</p>\r\n        <p class=\"title has-text-white\">{{total}}</p>\r\n        <p class=\"content mt-4\">Total of students</p>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"pb-6\"></div>\r\n\r\n</div>");

/***/ }),

/***/ "OPW3":
/*!*****************************************************************!*\
  !*** ./src/app/student/student-list/student-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "wEZN");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "z8H+");





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    routeIsActive(routePath) {
        return this.router.url == routePath;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "XAy1":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/student/student-card/student-card.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-5\">\r\n  <div class=\"card-content\">\r\n    <div class=\"media\">\r\n      <div class=\"media-left\">\r\n        <figure class=\"image is-64x64\">\r\n          <img class=\"is-rounded\" src=\"https://ui-avatars.com/api/?name={{student.firstname}}+{{student.lastname}}\" alt=\"Placeholder image\">\r\n        </figure>\r\n      </div>\r\n      <div class=\"media-content ml-2\">\r\n        <p class=\"title is-4 pb-2\">{{student.firstname}} {{student.lastname}}</p>\r\n        <div class=\"subtitle is-flex is-align-items-center\">\r\n          <span class=\"is-size-6 is-flex is-align-items-center\">\r\n            <i class=\"ti ti-gift has-text-grey is-size-5\"></i>\r\n            <span class=\"ml-2\">{{student.age}} years old</span>\r\n          </span>\r\n          <span class=\"ml-6 is-size-6 is-flex is-align-items-center\">\r\n            <i class=\"ti ti-calendar-event has-text-grey is-size-5\"></i>\r\n            <span class=\"ml-2\">{{student.date}}</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <button class=\"button is-outlined is-rounded\" [ngClass]=\"{'is-primary' : student.sex === 'Male', 'is-danger' : student.sex === 'Female'}\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ti\" [ngClass]=\"{'ti-mars' : student.sex === 'Male', 'ti-venus' : student.sex === 'Female', 'ti-alien' : student.sex === ''}\"></i>\r\n            </span>\r\n            <span>{{student.sex || \"Unknown\"}}</span>\r\n          </button>\r\n          <button class=\"button is-outlined is-rounded ml-2\" [ngClass]=\"{'hidden' : checkBio()}\">\r\n            <span class=\"icon\">\r\n              <i class=\"ti ti-check\"></i>\r\n            </span>\r\n            <span>Includes biography</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"media-right\">\r\n        <button class=\"button mr-2 is-success is-outlined\" [disabled]=\"checkBio()\" (click)=\"goToLink(fileURL)\">\r\n          <span class=\"icon is-mall\">\r\n            <i class=\"ti ti-download\"></i>            \r\n          </span>\r\n          <span>Download</span>\r\n        </button>\r\n        <div class=\"dropdown is-right\" [ngClass]=\"{'is-active' : togglers[index] === 1}\">\r\n          <div class=\"dropdown-trigger\">\r\n            <button class=\"button toggler\" aria-haspopup=\"true\" aria-controls=\"dropdown-menu\" (click)=\"toggleDropdown(index)\">\r\n              <span class=\"icon is-small\">\r\n                <i class=\"ti ti-settings\" aria-hidden=\"true\"></i>\r\n              </span>\r\n              <span>Options</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"dropdown-menu\" id=\"dropdown-menu\" role=\"menu\">\r\n            <div class=\"dropdown-content\">\r\n              <a class=\"dropdown-item\" routerLink=\"edit\" [state]=\"{student: student, isCreate: false}\">\r\n                <span class=\"icon\">\r\n                  <i class=\"ti ti-pencil\"></i>\r\n                </span>\r\n                <span>Edit</span>\r\n              </a>\r\n              <a class=\"dropdown-item modal-button\" (click)=\"toggleDeleteModal()\">\r\n                <span class=\"icon\">\r\n                  <i class=\"ti ti-x\"></i>\r\n                </span>\r\n                <span>Delete</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"modal-fadeInScale-fs\" class=\"modal modal-pos-top modal-fx-fadeInScale\" [ngClass]=\"{'is-active': deleteModal}\">\r\n  <div class=\"modal-background\"></div>\r\n  <div class=\"modal-content modal-card is-tiny\">\r\n      <header class=\"modal-card-head has-background-link has-text-white\">\r\n          <p class=\"modal-card-title has-text-white\">Delete student</p>\r\n          <button class=\"modal-button-close delete\" aria-label=\"close\" (click)=\"toggleDeleteModal()\"></button>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n      Are you sure?\r\n      </section>\r\n      <footer class=\"modal-card-foot\">\r\n          <button class=\"modal-button-close button is-link\" (click)=\"deleteStudent()\">Confirm</button>\r\n          <button class=\"modal-button-close button\" (click)=\"toggleDeleteModal()\">Cancel</button>\r\n      </footer>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "XLIR":
/*!*****************************************************************!*\
  !*** ./src/app/student/student-card/student-card.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toggler span{\r\n  pointer-events: none;\r\n}\r\n\r\n.hidden{\r\n  display: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InN0dWRlbnQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZXIgc3BhbntcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmhpZGRlbntcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "XP+1":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "z8H+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "QVs2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "fwkp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "CrL0");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-list/student-list.component */ "ytEo");
/* harmony import */ var _student_reports_student_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-reports/student-reports.component */ "slPn");
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-form/student-form.component */ "u4XX");
/* harmony import */ var _student_card_student_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-card/student-card.component */ "38i2");
/* harmony import */ var _student_upload_student_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-upload/student-upload.component */ "9Vy1");











const routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', children: [
            {
                path: '', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__["StudentListComponent"]
            },
            {
                path: 'create', children: [
                    {
                        path: '', component: _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_8__["StudentForm"]
                    },
                    {
                        path: 'upload', component: _student_upload_student_upload_component__WEBPACK_IMPORTED_MODULE_10__["StudentUploadComponent"]
                    }
                ]
            },
            {
                path: 'edit', component: _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_8__["StudentForm"]
            }
        ] },
    { path: 'reports', component: _student_reports_student_reports_component__WEBPACK_IMPORTED_MODULE_7__["StudentReportsComponent"] },
    { path: '**', redirectTo: 'students' }
];
let StudentRoutingModule = class StudentRoutingModule {
};
StudentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        declarations: [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__["StudentListComponent"], _student_reports_student_reports_component__WEBPACK_IMPORTED_MODULE_7__["StudentReportsComponent"], _student_card_student_card_component__WEBPACK_IMPORTED_MODULE_9__["StudentCard"], _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_8__["StudentForm"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _student_card_student_card_component__WEBPACK_IMPORTED_MODULE_9__["StudentCard"]]
    })
], StudentRoutingModule);



/***/ }),

/***/ "XSuT":
/*!*********************************************************************!*\
  !*** ./src/app/student/student-upload/student-upload.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "RV6X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "fwkp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "wY2j");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "2wun");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "ED48");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "QVs2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "z8H+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _student_student_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/student.module */ "ejW6");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"], useValue: '/my/app' }],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _student_student_module__WEBPACK_IMPORTED_MODULE_10__["StudentModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "ejW6":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "RV6X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "fwkp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "QVs2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "z8H+");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-routing.module */ "XP+1");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/student.service */ "JmRu");








//import { StudentCard } from './student-card/student-card.component';
let StudentModule = class StudentModule {
};
StudentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_6__["StudentRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        declarations: [],
        providers: [_services_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"]],
        exports: [_student_routing_module__WEBPACK_IMPORTED_MODULE_6__["StudentRoutingModule"]]
    })
], StudentModule);



/***/ }),

/***/ "fF9i":
/*!*****************************************!*\
  !*** ./src/app/models/student.model.ts ***!
  \*****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
}


/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "cDZn");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "iDTD":
/*!*****************************************************************!*\
  !*** ./src/app/student/student-form/student-form.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden{\r\n  display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InN0dWRlbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "slPn":
/*!**********************************************************************!*\
  !*** ./src/app/student/student-reports/student-reports.component.ts ***!
  \**********************************************************************/
/*! exports provided: StudentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentReportsComponent", function() { return StudentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_student_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-reports.component.html */ "O8wE");
/* harmony import */ var _student_reports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-reports.component.css */ "/iPF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/student.service */ "JmRu");





let StudentReportsComponent = class StudentReportsComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.males = 0;
        this.females = 0;
        this.bio = 0;
        this.total = 0;
    }
    ngOnInit() {
        this.count();
    }
    count() {
        this.studentService.getAllStudents().forEach(x => {
            x.map(p => {
                if (p.sex === "Male")
                    this.males += 1;
                else if (p.sex === "Female")
                    this.females += 1;
                if (p.biography) {
                    if (p.biography.name !== null)
                        this.bio += 1;
                }
            });
            this.total = x.length;
        });
    }
};
StudentReportsComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] }
];
StudentReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'student-reports',
        template: _raw_loader_student_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_reports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentReportsComponent);



/***/ }),

/***/ "u4XX":
/*!****************************************************************!*\
  !*** ./src/app/student/student-form/student-form.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentForm", function() { return StudentForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_student_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-form.component.html */ "EpC0");
/* harmony import */ var _student_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-form.component.css */ "iDTD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "fwkp");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/student.service */ "JmRu");
/* harmony import */ var _models_student_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/student.model */ "fF9i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "QVs2");








let StudentForm = class StudentForm {
    constructor(studentService, location) {
        this.studentService = studentService;
        this.location = location;
        this.isCreate = true;
        this.ageArray = [];
        this.fileNameToUpload = "Empty";
        this.formTitle = "Create a student";
        this.processCompleted = true;
    }
    ngOnInit() {
        this.ageArray.push(...Array.from({ length: 99 }, (_, i) => i + 1));
        this.isCreate = this.location.getState().isCreate || false;
        let item = this.location.getState().student;
        if (!this.isCreate) {
            console.log("LOL");
            this.student_edit = this.mapStudent(item);
            if (!item.biography) {
                item.biography = { url: '', name: '' };
            }
            this.fileNameToUpload = item.biography.name || '';
            this.formTitle = "Edit a student";
        }
        else {
            item = {
                firstname: '',
                lastname: '',
                sex: '',
                age: ''
            };
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item.firstname || ''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item.lastname || ''),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item.sex || 'Select'),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](item.age || 'Select'),
            biography: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({})
        });
    }
    mapStudent(source) {
        let one = new _models_student_model__WEBPACK_IMPORTED_MODULE_6__["Student"]();
        one.id = source.id;
        one.date = source.date;
        one.biography = source.biography;
        console.log(one);
        return one;
    }
    onSubmit() {
        this.processCompleted = false;
        setTimeout(() => {
            this.processCompleted = true;
            this.goBack();
        }, 3000);
        let student = this.form.value;
        let f = this.file;
        student.biography.file = f || null;
        if (f && !this.isCreate) {
            let del = '';
            if (this.student_edit.biography) {
                del = this.student_edit.biography.name;
                this.studentService.deleteFile(del);
            }
        }
        if (this.isCreate) {
            this.studentService.createStudent(student);
        }
        else {
            student.id = this.student_edit.id;
            student.date = this.student_edit.date;
            //student.biography = this.student_edit.biography;
            console.log(student);
            this.studentService.updateStudent(student);
        }
    }
    changeFileName(e) {
        console.log(1);
        const element = e.currentTarget;
        let fileList = element.files;
        if (fileList) {
            this.fileNameToUpload = fileList[0].name;
            this.file = fileList[0];
        }
    }
    goBack() {
        this.location.back();
    }
};
StudentForm.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
StudentForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'student-form',
        template: _raw_loader_student_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentForm);



/***/ }),

/***/ "wEZN":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/raw-loader@4.0.2_webpack@4.44.2/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar is-link\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\">\n      <a class=\"navbar-item pr-5\" href=\"#\">\n        <span class=\"icon is-large\">\n          <i class=\"ti ti-brand-android is-size-4\"></i>\n        </span>\n        <span class=\"is-size-5\"><b>STUDENT MANAGEMENT</b></span>\n      </a>\n      <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\" (click)=\"toggleNavbar()\">\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n      </a>\n    </div>\n    <div id=\"navbarBasicExample\" class=\"navbar-menu\" [ngClass]=\"{ 'is-active': navbarOpen }\">\n      <div class=\"navbar-end\">\n        <a class=\"navbar-item is-active pr-4\" routerLink=\"students\" routerLinkActive=\"is-active\">\n          <span class=\"icon is-small mr-2\">\n            <i class=\"ti ti-user\"></i>\n          </span>\n          <span>Student List</span>\n        </a>\n        <a class=\"navbar-item pr-4\" routerLink=\"reports\" routerLinkActive=\"is-active\">\n          <span class=\"icon is-small mr-2\">\n            <i class=\"ti ti-chart-line\"></i>\n          </span>\n          <span>Reports</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<nav class=\"breadcrumb p-2 has-background-white\" aria-label=\"breadcrumbs\">\n  <div class=\"container\">\n    <ul>\n      <li class=\"no-hidden\"><a routerLink=\"\">App</a></li>\n      <li routerLinkActive=\"no-hidden\" [ngClass]=\"{'is-active' : routeIsActive('/students') }\"><a routerLink=\"students\">Student List</a></li>\n      <li routerLinkActive=\"no-hidden\" [ngClass]=\"{'is-active' : routeIsActive('/students/create') }\"><a routerLink=\"students/create\">Create student</a></li>\n      <li routerLinkActive=\"no-hidden\" [ngClass]=\"{'is-active' : routeIsActive('/students/edit') }\"><a routerLink=\"students/edit\">Edit student</a></li>\n      <li routerLinkActive=\"no-hidden\" [ngClass]=\"{'is-active' : routeIsActive('/students/create/upload') }\"><a routerLink=\"students/create/upload\">Upload</a></li>\n      <li routerLinkActive=\"no-hidden\" [ngClass]=\"{'is-active' : routeIsActive('/reports') }\"><a routerLink=\"reports\">Reports</a></li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer mt-4 has-background-link has-text-white\" style=\"padding-bottom: 2rem !important;\">\n  <div class=\"content has-text-centered\">\n    <p>\n      <strong class=\"has-text-white\">Student Management</strong> by <a href=\"#\" class=\"has-text-light  is-underlined\">Isocrates De La Cruz</a>. The source code is licensed\n      <a href=\"http://opensource.org/licenses/mit-license.php\" class=\"has-text-light  is-underlined\">MIT</a>. Everything about this is Open Source.\n    </p>\n    <div class=\"is-flex\">\n      <div class=\"buttons ml-auto mr-auto\">\n        <button class=\"button is-outlined is-white\">\n          <span class=\"icon is-small\">\n            <i class=\"ti ti-brand-github\"></i>\n          </span>\n          <span>Github</span>\n        </button>\n        <button class=\"button is-outlined is-white\">\n          <span class=\"icon is-small\">\n            <i class=\"ti ti-brand-facebook\"></i>\n          </span>\n          <span>Facebook</span>\n        </button>\n        <button class=\"button is-outlined is-white\">\n          <span class=\"icon is-small\">\n            <i class=\"ti ti-brand-linkedin\"></i>\n          </span>\n          <span>Linkedin</span>\n        </button>\n      </div>\n    </div>\n    <br/>\n    <p>- 2021 -</p>\n  </div>\n</footer>");

/***/ }),

/***/ "wY2j":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAgK8PUVqzUG8PlPqSCbiLslJfXF81tclE",
        authDomain: "casique-c6ab4.firebaseapp.com",
        databaseURL: "https://casique-c6ab4-default-rtdb.firebaseio.com",
        projectId: "casique-c6ab4",
        storageBucket: "casique-c6ab4.appspot.com",
        messagingSenderId: "268587164429",
        appId: "1:268587164429:web:a5bfe0b541af3aba92c644",
        measurementId: "G-1WNXV03RFG"
    }
};


/***/ }),

/***/ "ytEo":
/*!****************************************************************!*\
  !*** ./src/app/student/student-list/student-list.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "c5Gk");
/* harmony import */ var _raw_loader_student_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./student-list.component.html */ "9+2A");
/* harmony import */ var _student_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-list.component.css */ "OPW3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "hVcm");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/student.service */ "JmRu");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "e/cG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "zrD2");







let StudentListComponent = class StudentListComponent {
    constructor(studentService) {
        this.studentService = studentService;
        this.studentList = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
        this.togglers = new Array();
    }
    ngOnInit() {
        this.studentList = this.studentService.getAllStudents();
        this.studentList.forEach(x => x.forEach(a => this.togglers.push(0)));
    }
    filteredList(keyword) {
        this.studentList = this.studentService.getAllStudents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(x => x.filter(p => p.firstname.toLowerCase().includes(keyword.toLowerCase()))));
    }
    changeEverything(e) {
        this.filteredList(e.target.value);
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] }
];
StudentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'student-list',
        template: _raw_loader_student_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_student_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StudentListComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "Ad7s");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map