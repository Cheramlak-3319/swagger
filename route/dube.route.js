const express = require('express');
const dubeRoute = express.Router();
const {
    getMerchantList,
    getCustomerList,
    getInvoices,
    getRepaymentHistory,
    getTopupHistory,
    getProjectList,
    getSupplierList,
    getReceipt,
    getOpenInvoices,
    getAllInvoices,
    getAllInternationalCustomers,
    getAllInternationalInvoices,
    getInternationalTotals,
    getCashInandCashOut,
    getRepaymentHistoryList,
    getInvicesandRepayments,
    getTotals,
} = require('../controller/dube.controller.js');

/**
 * @swagger
 * /dube/international/getmerchantlist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Merchant List
 *     description: Retrieves a list of merchants.
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 10
 *       - in: query
 *         name: Page
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *       - in: query
 *         name: userId
 *         description: Unique identifier for the user (6 digits)
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 123456
 *       - in: query
 *         name: mobile
 *         description: The international dial code used to filter results by country (e.g., +251******)
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: project
 *         description: Project name, replaced with 'Palladium' if it contains 'Standard'
 *         required: false
 *         schema:
 *           type: string
 *           example: Palladium
 *       - in: query
 *         name: countryCode
 *         description: The ISO 3166-1 alpha-2 country code (e.g., ET, KE, SN)
 *         required: false
 *         schema:
 *           type: string
 *           pattern: "^[A-Z]{2}$"
 *           example: ET
 *       - in: query
 *         name: active
 *         description: Whether the merchant is active or not
 *         required: false
 *         schema:
 *           type: string
 *           enum: ["1", "0"]
 *           example: "1"
 *     responses:
 *       200:
 *         description: List of merchants retrieved successfully
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
 *                   example: "2792"
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userid:
 *                         type: string
 *                         example: "123456"
 *                       fullname:
 *                         type: string
 *                         example: "hello shop"
 *                       businessName:
 *                         type: string
 *                         example: "hello shop"
 *                       mobile:
 *                         type: string
 *                         example: "251912345678"
 *                       createdon:
 *                         type: string
 *                         example: "2024-11-12 07:08:55"
 *                       project:
 *                         type: string
 *                         example: "Palladium"
 *                       initialdeposit:
 *                         type: string
 *                         example: "0.00"
 *                       bnpl:
 *                         type: string
 *                         example: "0.00"
 *                       active:
 *                         type: string
 *                         example: "1"
 *                       lastTrxnDate:
 *                         type: string
 *                         example: "2024-11-15 14:46:27"
 *                       language:
 *                         type: string
 *                         example: "en"
 *                       foodCategory:
 *                         type: string
 *                         example: "desert"
 *                       wallets:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                               example: "1234567890"
 *                             wallettype:
 *                               type: string
 *                               example: "MERCHANT_AVAILABLE"
 *                             balance:
 *                               type: string
 *                               example: "2000000"
 *                             bnpl:
 *                               type: string
 *                               example: "0.00"
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
 *                   example: "An internal server error occurred."
 */



dubeRoute.get('/international/getcustomerlist.php', getMerchantList);


/** 
 * @swagger
 * /dube/international/getcustomerlist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Customer List
 *     description: Retrieves a list of customers.
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 10
 *       - in: query
 *         name: Page
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *       - in: query
 *         name: mobile
 *         description: |
 *           The international dial code used to filter results by country.
 *           - Example format: `+XXX` (e.g., `+251******` for Ethiopia, `+254******` for Kenya, `+221******` for Senegal).
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: countryCode
 *         description: |
 *           The ISO 3166-1 alpha-2 country code used to filter results by country.
 *           - Example: "ET" for Ethiopia, "KE" for Kenya, "SN" for Senegal.
 *         required: false
 *         schema:
 *           type: string
 *           pattern: "^[A-Z]{2}$"
 *           example: ET
 *     responses:
 *       200:
 *         description: List of customers retrieved successfully
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
 *                   example: "2792"
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userid: 
 *                         type: string
 *                         example: "123456"
 *                       fullname: 
 *                         type: string
 *                         example: "hello shop"
 *                       mobile:
 *                         type: string
 *                         example: "25112345678"
 *                       creditwallet:
 *                         type: string
 *                         example: "1234567890"
 *                       purchasewallet: 
 *                         type: string
 *                         example: "1234567890"
 *                       purchasebalance: 
 *                         type: string
 *                         example: "0.00"
 *                       createdon:
 *                         type: string
 *                         example: "2024-11-12 07:08:55"
 *                       createdby:
 *                         type: string
 *                         example: "233900000002"
 *                       merchantName:
 *                         type: string
 *                         example: "hello shop"
 *                       merchantUserId: 
 *                         type: string
 *                         example: "123456"
 *                       active:
 *                         type: string
 *                         example: "1"
 *                       bnpl:
 *                         type: string
 *                         example: "0.00"
 *                       otheCreditLines:
 *                         type: array
 *                         description: List of other credit lines (if any)
 *                         items:
 *                           type: object
 *                           properties: {}
 *                         example: []
 *                       gifts:
 *                         type: array
 *                         description: List of gifts (if any)
 *                         items:
 *                           type: object
 *                           properties: {}
 *                         example: []
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
 *                   example: "An internal server error occurred."
 */

dubeRoute.get('/international/getcustomerlist.php', getCustomerList);

/**
 * @swagger
 * /dube/international/getallinvoices.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get All Invoices
 *     description: Retrieves a list of all invoices.
 *     parameters:
 *       - in: query
 *         name: wallet
 *         description: |
 *           Wallet identifier or type
 *           - Example: `"1234567890"` for a specific wallet, or leave empty for all wallets.
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: start
 *         description: |
 *           Start date or parameter for filtering
 *           - Example: `"2024-01-01"`
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: end
 *         description: |
 *           End date or parameter for filtering
 *           - Example: `"2024-12-31"`
 *         required: false
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: limit
 *         description: Number of results to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 10
 *       - in: query
 *         name: offset
 *         description: Pagination offset
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 0
 *     responses:
 *       200:
 *         description: List of invoices retrieved successfully
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
 *                   example: "270792"
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       transactionId:
 *                         type: string
 *                         example: "WFPWP1234567890123"
 *                       merchantName:
 *                         type: string
 *                         example: "Hello Shop"
 *                       merchantUserId:
 *                         type: string
 *                         example: "123456"
 *                       merchantMobile:
 *                         type: string
 *                         example: "251912345678"
 *                       customerName:
 *                         type: string
 *                         example: "Hello Market"
 *                       customerMobile:
 *                         type: string
 *                         example: "251987654332"
 *                       amount:
 *                         type: number
 *                         example: 933.68
 *                       transactionDate:
 *                         type: string
 *                         example: "2025-02-13 08:11:26"
 *                       transactionStatus:
 *                         type: string
 *                         example: "PROCESSED"
 *                       dueDate:
 *                         type: string
 *                         example: "2027-02-13 08:10:50"
 *                       overdue:
 *                         type: boolean
 *                         example: true
 *                       repayed:
 *                         type: string
 *                         example: "0"
 *                       repayment:
 *                         type: array
 *                         description: List of repayment entries (if any)
 *                         items:
 *                           type: object
 *                           properties: {}
 *                         example: []
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
 *                   example: "An internal server error occurred."
 */


dubeRoute.get('/international/getinvoices.php', getInvoices);

/**
 * @swagger
 * /dube/international/getrepaymenthistorylist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Repayment History List
 *     description: Retrieve an existing repayment history list.
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 10
 *       - in: query
 *         name: page
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *       - in: query
 *         name: mobile
 *         description: |
 *           Mobile number including the international dial code.
 *           - Example format: +251912345678 (Ethiopia), +254712345678 (Kenya)
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: countryCode
 *         description: |
 *           The ISO 3166-1 alpha-2 country code used to filter results by country.
 *           - Example: "ET" for Ethiopia, "KE" for Kenya, "SN" for Senegal.
 *         required: false
 *         schema:
 *           type: string
 *           example: "ET"
 *     responses:
 *       200:
 *         description: List of repayment history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 totalCount:
 *                   type: integer
 *                   example: 2792
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       transactionList: 
 *                         type: string
 *                         example: "DW12345678AbC1234"
 *                       transactionID: 
 *                         type: string
 *                         example: "DWCRAbCdRA00000"
 *                       paidFrom:
 *                         type: string
 *                         example: "9733770001"
 *                       payerName:
 *                         type: string
 *                         example: "Hello Shop"
 *                       payerMobile:
 *                         type: string
 *                         example: "251900000000"
 *                       payerUserId:
 *                         type: string
 *                         example: "123456"
 *                       repaidAmount:
 *                         type: string
 *                         example: "0.00"
 *                       repaymentStatus:
 *                         type: string
 *                         example: "PROCESSED"
 *                       repaymentDate:
 *                         type: string
 *                         example: "2024-11-15 14:46:27"
 *                       invoice:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             transactionId:
 *                               type: string
 *                               example: "DWCRAbCdRA00000"
 *                             wallettype:
 *                               type: string
 *                               example: "MERCHANT_CREDIT"
 *                             amount:
 *                               type: number
 *                               example: 10
 *                             transactionDate:
 *                               type: string
 *                               format: date-time
 *                               example: "2024-11-15 14:46:27"
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
 *                   example: "An internal server error occurred."
 */

dubeRoute.get('/international/getrepaymenthistory.php', getRepaymentHistory);

/**
 * @swagger
 * tags:
 *   - name: Dube International
 *     description: Dube International wallet operations

/**
 * @swagger
 * /dube/gettopuphistory.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Top-up History
 *     description: Retrieve top-up transaction history with filtering options
 *     parameters:
 *       - in: query
 *         name: wallet
 *         description: Wallet identifier or type (leave empty for all wallets)
 *         schema:
 *           type: string
 *         example: "1234567890"
 *       - in: query
 *         name: mobile
 *         description: Mobile number with international dial code
 *         schema:
 *           type: string
 *         example: "+251912345678"
 *       - in: query
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 country code
 *         schema:
 *           type: string
 *         example: "ET"
 *       - in: query
 *         name: start
 *         description: Start date for filtering (YYYY-MM-DD)
 *         schema:
 *           type: string
 *           format: date
 *         example: "2024-01-01"
 *       - in: query
 *         name: end
 *         description: End date for filtering (YYYY-MM-DD)
 *         schema:
 *           type: string
 *           format: date
 *         example: "2024-12-31"
 *       - in: query
 *         name: limit
 *         description: Number of results per page
 *         schema:
 *           type: integer
 *         example: 10
 *       - in: query
 *         name: page
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful response with transaction history
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 totalCount:
 *                   type: integer
 *                   example: 2792
 *                 message:
 *                   type: array
 *                   items:
 *                     oneOf:
 *                       - $ref: '#/components/schemas/TopupHistoryDetailed'
 *                       - $ref: '#/components/schemas/TopupHistoryBasic'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

 
dubeRoute.get('/international/gettopuphistory.php', getTopupHistory);

/**
 * @swagger
 * /dube/international/getprojectlist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Project List
 *     description: Retrieve a list of projects with filtering options
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return per page
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 10
 *       - in: query
 *         name: Page
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 1
 *       - in: query
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 country code to filter projects
 *         schema:
 *           type: string
 *         example: "ET"
 *     responses:
 *       200:
 *         description: Successful response with project list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectListResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

dubeRoute.get('/international/getprojectlist.php', getProjectList);
/**
 * @swagger
 * /dube/international/getsupplierlist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Supplier List
 *     description: Retrieve a list of suppliers with filtering and pagination options
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return per page
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 10
 *       - in: query
 *         name: mobile
 *         description: International dial code to filter suppliers by mobile number
 *         schema:
 *           type: string
 *         example: "+251900000000"
 *       - in: query
 *         name: countryCode
 *         description: ISO 3166-1 alpha-2 country code to filter suppliers by country
 *         schema:
 *           type: string
 *         example: "ET"
 *       - in: query
 *         name: offset
 *         description: Pagination offset (records to skip)
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 0
 *     responses:
 *       200:
 *         description: Successful response with supplier list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SupplierListResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

dubeRoute.get('/international/getsupplierlist.php', getSupplierList);

/**
 * @swagger
 * /dube/international/getreceiptlist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Receipt List
 *     description: Retrieve a paginated list of all receipts with optional country filtering
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return per page
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 10
 *       - in: query
 *         name: countryCode
 *         description: |
 *           Filter receipts by ISO 3166-1 alpha-2 country code
 *           - Example: "ET" for Ethiopia, "KE" for Kenya, "SN" for Senegal
 *         schema:
 *           type: string
 *         example: "ET"
 *       - in: query
 *         name: page
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful response with receipt list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReceiptListResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


dubeRoute.get('/international/getreceipt.php', getReceipt);
/**
 * @swagger
 * /dube/getopeninvoices.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get All Open Invoices
 *     description: Retrieve a list of all open invoices with filtering and pagination options
 *     parameters:
 *       - in: query
 *         name: wallet
 *         description: |
 *           Wallet identifier to filter invoices (leave empty for all wallets)
 *           - Example: "1234567890"
 *         schema:
 *           type: string
 *       - in: query
 *         name: start
 *         description: |
 *           Start date for filtering invoices (inclusive)
 *           - Format: YYYY-MM-DD
 *           - Example: "2024-01-01"
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: end
 *         description: |
 *           End date for filtering invoices (inclusive)
 *           - Format: YYYY-MM-DD
 *           - Example: "2024-12-31"
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: limit
 *         description: Number of results to return per page
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 10
 *       - in: query
 *         name: offset
 *         description: Number of records to skip for pagination
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 0
 *     responses:
 *       200:
 *         description: Successful response with open invoices list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OpenInvoicesResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

dubeRoute.get('/international/getopeninvoices.php', getOpenInvoices);
/**
 * @swagger
 * /dube/getallinvoices.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get All Invoices
 *     description: Retrieve a paginated list of all invoices with filtering capabilities
 *     parameters:
 *       - in: query
 *         name: wallet
 *         description: |
 *           Filter invoices by specific wallet ID
 *           - Example: "1234567890" (leave empty for all wallets)
 *         schema:
 *           type: string
 *       - in: query
 *         name: start
 *         description: |
 *           Start date for filtering invoices (inclusive)
 *           - Format: YYYY-MM-DD
 *           - Example: "2024-01-01"
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: end
 *         description: |
 *           End date for filtering invoices (inclusive)
 *           - Format: YYYY-MM-DD
 *           - Example: "2024-12-31"
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: limit
 *         description: Number of records to return per page
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 100
 *       - in: query
 *         name: offset
 *         description: Number of records to skip for pagination
 *         schema:
 *           type: integer
 *           format: int32
 *         example: 0
 *     responses:
 *       200:
 *         description: Successful response with invoice list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceListResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

dubeRoute.get('/international/getallinvoices.php', getAllInvoices);

dubeRoute.get('/international/getallcustomers.php', getAllInternationalCustomers);
dubeRoute.get('/international/getallinternationalinvoices.php', getAllInternationalInvoices);
/**
 * @swagger
 * /dube/international/gettotals.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get System Totals
 *     description: Retrieve comprehensive system statistics including user counts, transaction volumes, and financial totals
 *     responses:
 *       200:
 *         description: Successful response with system totals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SystemTotalsResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


dubeRoute.get('/international/getinternationaltotals.php', getInternationalTotals);
/**
 * @swagger
 * /dube/getcashinandouttotals.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Cash In/Out Totals
 *     description: Retrieve aggregated totals for cash transactions including deposits, withdrawals, and credits
 *     responses:
 *       200:
 *         description: Successful response with cash transaction totals
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CashTotalsResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

dubeRoute.get('/international/getcashinandcashout.php', getCashInandCashOut);

/**
 * @swagger
 * /dube/getrepaymenthistorylist.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get Repayment History list
 *     description: Get an existing Repayment History list
 *     parameters:
 *       - in: query
 *         name: limit
 *         description: Number of results to return
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *       - in: query
 *         name: Page
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int32
 *       - in: query
 *         name: mobile
 *         description: |
 *           The **international dial code** used to filter results by country.
 *           - Example format: `+XXX` (e.g., `+251` for Ethiopia, `+254` for Kenya, `+245` for Guinea-Bissau).
 *         required: false
 *         schema:
 *           type: string
 *           example: "+251"
 *       - in: query
 *         name: countryCode
 *         description: |
 *           The **ISO 3166-1 alpha-2** country code used to filter results by country.
 *           - Example: `"ET"` for Ethiopia, `"KE"` for Kenya, `"SN"` for Senegal.
 *         required: false
 *         schema:
 *           type: string
 *           pattern: "^[A-Z]{2}$"
 *           example: "ET"
 *     responses:
 *       200:
 *         description: Successful response with repayment history list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RepaymentHistoryListResponse'
 *       400:
 *         description: Bad request. The provided data is invalid or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error. An unexpected error occurred on the server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


dubeRoute.get('/international/getrepaymenthistorylist.php', getRepaymentHistoryList);


/**
 * @swagger
 * /dube/getinvoicesandrepayments.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get All Users
 *     description: Get an existing All Users
 *     responses:
 *       200:
 *         description: Successful response with invoices and repayments data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoicesAndRepaymentsResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


dubeRoute.get('/international/getinvicesandrepayments.php', getInvicesandRepayments);

/**
 * @swagger
 * /dube/international/gettotals.php:
 *   get:
 *     tags:
 *       - Dube International
 *     summary: Get All Users
 *     description: Get an existing All Users
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalsResponse'
 *       400:
 *         description: Bad request. The provided data is invalid or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error. An unexpected error occurred on the server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


dubeRoute.get('/international/gettotals.php', getTotals);


module.exports = dubeRoute;
