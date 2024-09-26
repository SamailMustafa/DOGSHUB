const router = require('express').Router();
var multer = require('multer');
var path = require('path')
const cors = require("cors");
router.use(cors())
const { body } = require('express-validator');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './ckuploads')
    },
    filename: function (req, file, cb) {
        cb(null, (Math.random()).toString() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });

const {GetAllVaccinations, GetVaccinationById, createVaccination, updateVaccination, deleteVaccination} = require ('./controllers/vaccinationController.js');
const {GetAllMedication, GetMedicationById, createMedication, updateMedication, deleteMedication} = require ('./controllers/medicationController.js');
const {GetAllBreed, GetBreedById, createBreed, updateBreed, deleteBreed} = require ('./controllers/breedController.js');
const {GetAllDiet, GetDietById, createDiet, updateDiet, deleteDiet} = require ('./controllers/DietController.js');
const {GetAllVet, GetVetById, createVet, updateVet, deleteVet} = require ('./controllers/vetController.js');
const {GetAllWound, GetWoundById, createWound, updateWound, deleteWound} = require ('./controllers/woundController.js');
const { adminLogin, userSignup, userSignIn, getAllUsers } = require('./controllers/registerController.js');
const { GetEmail, EmailOtp, changePasswordForget } = require('./controllers/forgetPasswordController.js');
const { feedback, getfeedback } = require('./controllers/feedbackController.js');
const { getAllReviews, getReviewByProductId, addReview } = require('./controllers/reviewController.js');

//dog controller for histoy what user Do

const { createDetection, getAllDetections, deleteDetection } = require('./controllers/detectionController.js');



router.get('/blog/GetAllBlogs', GetAllVaccinations);

router.post('/blog/GetBlogById', GetVaccinationById);

router.post('/blog/createBlog',cors(), createVaccination);

router.post('/blog/updateBlog', updateVaccination);

router.post('/blog/deleteBlog', deleteVaccination);

router.get('/medication/GetAllMedications', GetAllMedication);

router.post('/medication/GetMedicationById', GetMedicationById);

router.post('/medication/createMedication',cors(), createMedication);

router.post('/medication/updateMedication', updateMedication);

router.post('/medication/deleteMedication', deleteMedication);

router.get('/breed/GetAllBreeds', GetAllBreed);

router.post('/breed/GetBreedById', GetBreedById);

router.post('/breed/createBreed',cors(), createBreed);

router.post('/breed/updateBreed', updateBreed);

router.post('/breed/deleteBreed', deleteBreed);

router.get('/diet/GetAllDiets', GetAllDiet);

router.post('/diet/GetDietById', GetDietById);

router.post('/diet/createDiet',cors(), createDiet);

router.post('/diet/updateDiet', updateDiet);

router.post('/diet/deleteDiet', deleteDiet);

router.get('/vet/GetAllVets', GetAllVet);

router.post('/vet/GetVetById', GetVetById);

router.post('/vet/createVet',cors(), createVet);

router.post('/vet/updateVet', updateVet);

router.post('/vet/deleteVet', deleteVet);

router.get('/wound/GetAllWounds', GetAllWound);

router.post('/wound/GetWoundById', GetWoundById);

router.post('/wound/createWound',cors(), createWound);

router.post('/wound/updateWound', updateWound);

router.post('/wound/deleteWound', deleteWound);

router.post('/userSignup', userSignup);

router.post('/userSignIn', userSignIn);

router.get('/getAllUsers', getAllUsers);

router.post('/GetEmail', GetEmail)

router.post('/EmailOtp', EmailOtp)

router.post('/changePasswordForget', changePasswordForget)

router.get('/getfeedback', getfeedback);

router.post('/createfeedback', feedback);

router.get('/getreview', getAllReviews);

router.get('/getreview/:product_id', getReviewByProductId);

router.post('/createreview', addReview);

//routes for deteting user history of detecting image


router.post('/dog-detection/create', createDetection);
router.get('/dog-detection', getAllDetections);
router.delete('/dog-detection/delete/:id', deleteDetection);



router.get('/', (req, res) => {
    return res.send({
        message:"hello blog"
    })
})

router.post('/uploadImg', upload.single('uploadImg'), function (req, res, next) {
    res.json({ url: req.file.path })
})

router.post('/adminLogin', [
    body('email', "Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password', "The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], adminLogin);

module.exports = router;
