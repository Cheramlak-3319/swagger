const express = require('express');
const wfpRoute = express.Router();

const {
    generateDemmyVoucher,
    getTotals,
    getCategories,
    getBeneficiaryList,
    getVoucherList,
    getAllCycles,
    getAllInvoices,
    getTotalInvoices,
    getTotalCredit,
    getCashouHistory,
    getCreaditTransferHistory,
    getOnboardingList,  
}
= require('../controller/wfp.controller');

/**
 * @swagger
 * /wfp/generatedummyvouchers.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Generate Dummy Vouchers
 *     description: Create and retrieve test voucher data for development and testing purposes
 *     responses:
 *       200:
 *         description: Successfully generated dummy voucher data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DummyVoucherResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/generatedummyvouchers', generateDemmyVoucher)

/**
 * @swagger
 * /wfp/gettotals.php:
 *   get:
 *     tags: [WFP]
 *     summary: Get All Users
 *     description: Get an existing All Users
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: { type: boolean, example: false }
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       totalCashoutAmount: { type: string, example: "2082" }
 *                       totalCashoutNumber: { type: number, example: 77056 }
 *                       totalCreditAmount: { type: string, example: "2796" }
 *                       totalCreditNumber: { type: string, example: "77059" }
 *                       totalInvoiceAmount: { type: string, example: "635" }
 *                       totalInvoiceNumber: { type: string, example: "36307" }
 *                       totalBenefitedMerchantAmount: { type: string, example: "537" }
 *                       totalBenefitedMerchantNumber: { type: string, example: "137" }
 *                       totalBenefitedBeneficiaryAmount: { type: number, example: 69255702.57 }
 *                       totalBenefitedBeneficiaryNumber: { type: string, example: "234669" }
 *                       totalPurchases:
 *                         type: object
 *                         properties:
 *                           Vegetables: { type: string, example: "1000" }
 *                           Eggs: { type: string, example: "1000" }
 *                           Oil: { type: string, example: "1000" }
 *                           Fruits: { type: string, example: "1000" }
 *       400:
 *         description: Bad request. The provided data is invalid or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: { type: boolean, example: true }
 *                 message: { type: string, example: "No content passed." }
 *       500:
 *         description: Internal server error. An unexpected error occurred on the server.
 */

wfpRoute.get('/wfp/total', getTotals)

/**
 * @swagger
 * /wfp/getcategories.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Fetch Food Categories
 *     description: Retrieves hierarchical food category data including main categories and their subcategories
 *     responses:
 *       200:
 *         description: Successfully retrieved food category structure
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FoodCategoriesResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/categories', getCategories)

/**
 * @swagger
 * /wfp/getbeneficiarylist.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Beneficiary List
 *     description: Retrieve a comprehensive list of beneficiaries including their wallet balances and sub-wallet allocations
 *     responses:
 *       200:
 *         description: Successfully retrieved beneficiary data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BeneficiaryListResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/beneficiarylist', getBeneficiaryList)

/**
 * @swagger
 * /wfp/getvoucherslist.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Vouchers List
 *     description: Retrieve a comprehensive list of all voucher recipients with their details and wallet information
 *     responses:
 *       200:
 *         description: Successfully retrieved voucher recipient data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VoucherListResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/voucherlist', getVoucherList)

/**
 * @swagger
 * /wfp/getallcycles.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Distribution Cycles
 *     description: Retrieve all distribution cycles with their active status and date ranges
 *     responses:
 *       200:
 *         description: Successfully retrieved cycle information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CycleListResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/allcycles', getAllCycles)

/**
 * @swagger
 * /wfp/getallinvoices.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Fetch Invoices Summary
 *     description: Retrieve a comprehensive summary of all invoices including transaction details and itemized purchases
 *     responses:
 *       200:
 *         description: Successfully retrieved invoice summary data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceSummaryResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/allinvoices', getAllInvoices)

/**
 * @swagger
 * /wfp/gettotalinvoices.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Invoice Totals
 *     description: Retrieve aggregated totals of all invoices including total amount and count
 *     responses:
 *       200:
 *         description: Successfully retrieved invoice totals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceTotalsResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/totalinvoices', getTotalInvoices)

/**
 * @swagger
 * /wfp/gettotalcredit.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Credit Totals
 *     description: Retrieve aggregated credit information including total credit amount and number of credit transactions
 *     responses:
 *       200:
 *         description: Successfully retrieved credit totals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreditTotalsResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */


wfpRoute.get('/wfp/totalcredit', getTotalCredit)

/**
 * @swagger
 * /wfp/getcashouthistory.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Fetch Cashout Summary
 *     description: Retrieves a summary of cashouts
 *     responses:
 *       200:
 *         description: Successful response with cashout summary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 totalCount:
 *                   type: string
 *                   example: "7"
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       wallet:
 *                         type: string
 *                         example: "1"
 *                       userId:
 *                         type: string
 *                         example: "123456"
 *                       name:
 *                         type: string
 *                         example: "1000"
 *                       mobile:
 *                         type: string
 *                         example: "1000"
 *                       bank:
 *                         type: string
 *                         example: "1000"
 *                       accountNumber:
 *                         type: string
 *                         example: "1000"
 *                       amount:
 *                         type: string
 *                         example: "1000"
 *                       status:
 *                         type: string
 *                         example: "1"
 *                       requestDate:
 *                         type: string
 *                         example: "1000"
 *                       transactionData:
 *                         type: object
 *                         properties:
 *                           error:
 *                             type: string
 *                             example: "WFPWP8923034201839"
 *                           message:
 *                             type: string
 *                             example: "143700"
 *       400:
 *         description: Bad request. The provided data is invalid or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "No content passed."
 *       500:
 *         description: Internal server error. An unexpected error occurred on the server.
*/

wfpRoute.get('/wfp/cashouthistory', getCashouHistory)

/**
 * @swagger
 * /wfp/getcashouthistory.php:
 *   get:
 *     tags:
 *       - WFP
 *     summary: Get Cashout History
 *     description: Retrieve detailed history of cashout transactions including beneficiary and bank information
 *     responses:
 *       200:
 *         description: Successfully retrieved cashout history
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CashoutHistoryResponse'
 *       400:
 *         description: Bad request - invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */

wfpRoute.get('/wfp/credittransferhistory', getCreaditTransferHistory)

/**
 * @swagger
 * /wfp/getonboardingagentlist.php:
 *   get:
 *     tags: [WFP]
 *     summary: Get Total CashOut Totals
 *     description: Get an existing Total Credit
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: { type: boolean, example: false }
 *                 totalCount: { type: string, example: "7" }
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name: { type: string, example: "hello shop" }
 *                       mobile: { type: string, example: "251900000000" }
 *                       active: { type: string, example: "1" }
 *                       registeredOn: { type: string, example: "2024-01-01" }
 *       400:
 *         description: Bad request. The provided data is invalid or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error: { type: boolean, example: true }
 *                 message: { type: string, example: "No content passed." }
 *       500:
 *         description: Internal server error. An unexpected error occurred on the server.
 */


wfpRoute.get('/wfp/onboardinglist', getOnboardingList)

module.exports = wfpRoute;