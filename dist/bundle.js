/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ \"./src/components/project-input.ts\");\n/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ \"./src/components/project-list.ts\");\n\n\nnew _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();\nnew _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');\nnew _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');\n\n\n//# sourceURL=webpack://drag-and-drop/./src/app.ts?");

/***/ }),

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n    constructor(templateId, hostElementId, insertAtStart, newElementId) {\n        this.templateElement = document.getElementById(templateId);\n        this.hostElement = document.getElementById(hostElementId);\n        const importedNode = document.importNode(this.templateElement.content, true);\n        this.element = importedNode.firstElementChild;\n        if (newElementId) {\n            this.element.id = newElementId;\n        }\n        this.attach(insertAtStart);\n    }\n    attach(insertAtBeginning) {\n        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);\n    }\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/components/base-component.ts?");

/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\");\n/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/validation */ \"./src/util/validation.ts\");\n/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\");\n\n\n\nclass ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor() {\n        super('project-input', 'app', true, 'user-input');\n        this.titleInputElement = this.element.querySelector('#title');\n        this.descriptionInputElement = this.element.querySelector('#description');\n        this.peopleInputElement = this.element.querySelector('#people');\n        this.configure();\n    }\n    configure() {\n        this.element.addEventListener('submit', this.submitHandler.bind(this));\n    }\n    renderContent() { }\n    gatherUserInput() {\n        const enteredTitle = this.titleInputElement.value;\n        const enteredDescription = this.descriptionInputElement.value;\n        const enteredPeople = this.peopleInputElement.value;\n        const titleValidatable = {\n            value: enteredTitle,\n            required: true\n        };\n        const descriptionValidatable = {\n            value: enteredDescription,\n            required: true,\n            minLength: 5\n        };\n        const peopleValidatable = {\n            value: +enteredPeople,\n            required: true,\n            min: 1,\n            max: 5\n        };\n        if (!(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||\n            !(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||\n            !(0,_util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {\n            alert('Invalid input, please try again!');\n            return;\n        }\n        else {\n            return [enteredTitle, enteredDescription, +enteredPeople];\n        }\n    }\n    clearInputs() {\n        this.titleInputElement.value = '';\n        this.descriptionInputElement.value = '';\n        this.peopleInputElement.value = '';\n    }\n    submitHandler(event) {\n        event.preventDefault();\n        const userInput = this.gatherUserInput();\n        if (Array.isArray(userInput)) {\n            const [title, desc, people] = userInput;\n            _state_project_state__WEBPACK_IMPORTED_MODULE_2__.projectState.addProject(title, desc, people);\n            this.clearInputs();\n        }\n    }\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/components/project-input.ts?");

/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\");\n\nclass ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    get persons() {\n        if (this.project.people === 1) {\n            return '1 person';\n        }\n        else {\n            return `${this.project.people} persons`;\n        }\n    }\n    constructor(hostId, project) {\n        super('single-project', hostId, false, project.id);\n        this.project = project;\n        this.configure();\n        this.renderContent();\n    }\n    dragStartHandler(event) {\n        event.dataTransfer.setData('text/plain', this.project.id);\n        event.dataTransfer.effectAllowed = 'move';\n    }\n    dragEndHandler(event) {\n        console.log(\"DragEnd\");\n    }\n    configure() {\n        this.element.addEventListener('dragstart', this.dragStartHandler.bind(this));\n        this.element.addEventListener('dragend', this.dragEndHandler.bind(this));\n    }\n    renderContent() {\n        this.element.querySelector('h2').textContent = this.project.title;\n        this.element.querySelector('h3').textContent = this.persons + ' assigned';\n        this.element.querySelector('p').textContent = this.project.description;\n    }\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/components/project-item.ts?");

/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/components/base-component.ts\");\n/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item */ \"./src/components/project-item.ts\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\n/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\");\n\n\n\n\nclass ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(type) {\n        super('project-list', 'app', false, `${type}-projects`);\n        this.type = type;\n        this.assignedProjects = [];\n        this.configure();\n        this.renderContent();\n    }\n    dragOverHandler(event) {\n        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {\n            event.preventDefault();\n            const listEl = this.element.querySelector('ul');\n            listEl.classList.add('droppable');\n        }\n    }\n    dropHandler(event) {\n        const prjId = event.dataTransfer.getData('text/plain');\n        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(prjId, this.type === 'active' ? _models_project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active : _models_project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished);\n    }\n    dragLeaveHandler(_) {\n        const listEl = this.element.querySelector('ul');\n        listEl.classList.remove('droppable');\n    }\n    renderContent() {\n        const listId = `${this.type}-projects-list`;\n        this.element.querySelector('ul').id = listId;\n        this.element.querySelector('h2').textContent = this.type.toUpperCase() + 'PROJECTS';\n    }\n    configure() {\n        this.element.addEventListener('dragover', this.dragOverHandler.bind(this));\n        this.element.addEventListener('dragleave', this.dragLeaveHandler.bind(this));\n        this.element.addEventListener('drop', this.dropHandler.bind(this));\n        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {\n            const relevantProjects = projects.filter(prj => {\n                if (this.type === 'active') {\n                    return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active;\n                }\n                return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished;\n            });\n            this.assignedProjects = relevantProjects;\n            this.renderProjects();\n        });\n    }\n    renderProjects() {\n        const listEl = document.getElementById(`${this.type}-projects-list`);\n        listEl.innerHTML = '';\n        for (const prjItem of this.assignedProjects) {\n            new _project_item__WEBPACK_IMPORTED_MODULE_1__.ProjectItem(this.element.querySelector('ul').id, prjItem);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/components/project-list.ts?");

/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectStatus: () => (/* binding */ ProjectStatus)\n/* harmony export */ });\nvar ProjectStatus;\n(function (ProjectStatus) {\n    ProjectStatus[ProjectStatus[\"Active\"] = 0] = \"Active\";\n    ProjectStatus[ProjectStatus[\"Finished\"] = 1] = \"Finished\";\n})(ProjectStatus || (ProjectStatus = {}));\nclass Project {\n    constructor(id, title, description, people, status) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.people = people;\n        this.status = status;\n    }\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/models/project.ts?");

/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectState: () => (/* binding */ ProjectState),\n/* harmony export */   projectState: () => (/* binding */ projectState)\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\n\nclass State {\n    constructor() {\n        this.listeners = [];\n    }\n    addListener(listenerFn) {\n        this.listeners.push(listenerFn);\n    }\n}\nclass ProjectState extends State {\n    constructor() {\n        super();\n        this.projects = [];\n    }\n    static getInstance() {\n        if (this.instance) {\n            return this.instance;\n        }\n        this.instance = new ProjectState();\n        return this.instance;\n    }\n    moveProject(projectId, newStatus) {\n        const project = this.projects.find(prj => prj.id === projectId);\n        if (project && project.status !== newStatus) {\n            project.status = newStatus;\n            this.updateListeners();\n        }\n    }\n    updateListeners() {\n        for (const listenerFn of this.listeners) {\n            listenerFn(this.projects.slice());\n        }\n    }\n    addProject(title, description, numOfPeople) {\n        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);\n        this.projects.push(newProject);\n        for (const listenerFn of this.listeners) {\n            listenerFn(this.projects.slice());\n        }\n    }\n}\nconst projectState = ProjectState.getInstance();\n\n\n//# sourceURL=webpack://drag-and-drop/./src/state/project-state.ts?");

/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validate: () => (/* binding */ validate)\n/* harmony export */ });\nfunction validate(validatableInput) {\n    let isValid = true;\n    if (validatableInput.required) {\n        isValid = isValid && validatableInput.value.toString().trim().length !== 0;\n    }\n    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {\n        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;\n    }\n    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {\n        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;\n    }\n    if (validatableInput.min != null && typeof validatableInput.value === 'number') {\n        isValid = isValid && validatableInput.value >= validatableInput.min;\n    }\n    if (validatableInput.max != null && typeof validatableInput.value === 'number') {\n        isValid = isValid && validatableInput.value <= validatableInput.max;\n    }\n    return isValid;\n}\n\n\n//# sourceURL=webpack://drag-and-drop/./src/util/validation.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;