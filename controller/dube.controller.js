const getMerchantList = async (req, res) => {
    try {
      const { limit, Page, mobile, countryCode } = req.query;
      // Add DB query or forwarding logic here
      res.json({
        error: false,
        totalCount: "100",
        message: [{ 
            userid: "123", 
            fullname: "Test User",
            businessName: "Test Business", 
            mobile: "251123456789",
            createdon: "2024-11-12 07:08:55",
            project: "Palladium",
            initialdeposit: "0.00",
            bnpl: "0.00",
            active: "1",
            lastTrxnDate: "2024-11-15 14:46:27",
            language: "en",
            wallets: [
                { 
                    name: "1234567890",
                    wallettype : "MERCHANT_AVILABLE",
                    balance: "0.00",
                    bnpl: "0.00",
                 },
                 { 
                    name: "1234567890",
                    wallettype : "MERCHANT_CREDIT",
                    balance: "0.00",
                    bnpl: "0.00",
                 },
                    { 
                        name: "1234567890",
                        wallettype : "MERCHANT_EARNING",
                        balance: "0.00",
                        bnpl: "0.00",
                    },
                    { 
                        name: "1234567890",
                        wallettype : "MERCHANT_BNPL",
                        balance: "0.00",
                        bnpl: "0.00",
                    },
            ],
            foodCategory: "desert",
         }]
      });
    } catch (err) {
      res.status(500).json({ error: true, message: "Internal Server Error" });
    }
  };
  

const getCustomerList = async(req, res) => {
    try{
        const { limit, Page, mobile, countryCode } = req.query;
        // Add DB query or forwarding logic here
        res.json({
            error: false,
            totalCount: "100",
            message: [{
                userid: "123",
                fullname: "Test User",
                mobile: "251123456789",
                creditwallet: "1234567890",
                purchasewallet: "1234567890",
                purchasebalance: "0.00",
                createdon: "2024-11-12 07:08:55",
                createdby : "233900000002",
                merchantName: "Test Merchant",
                merchantUserId : "123456",
                active: "1",
                bnpl: "0.00",
                otheCreditLines: [],
                gifts: [], 
                 }]
        });
         
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getInvoices = async(req, res) => {
    const { wallet, start, end, limit, offset } = req.query;
    try{
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                transactionId: "1234567890",
                merchantName: "Test Merchant",
                merchantUserId:  "123456",
                merchantMobile: "251912345678",
                customerName: "Test User",
                customerMobile:  "251912345678",
                amount: "0.00",
                transactionDate: "2024-11-12 07:08:55",
                transactionStatus: "Success",
                dueDate: "2024-11-12 07:08:55",
                overdue: "0.00",
                repayed: "0.00",
                repayment: [{}],
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
        
}

const getRepaymentHistory = async(req, res) => {
    try{
        const { page, mobile, countryCode, limit} = req.query;
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                transactionList: "DW12345678AbC1234",
                transactionId: "1234567890",
                paidFrom: "1234567890",
                payerName:  "Test User",
                payerMobile: "251912345678",
                payerUserId:  "123456",
                repaidAmount:  "0.00",
                repaymentStatus: "Success",
                repaymentDate: "2024-11-12 07:08:55",
                invoice: [
                    {
                        transactionId: "1234567890",
                        wallettype: "MERCHANT_BNPL",
                        amount: "1234567890",
                        transactionDate: "2024-11-12 07:08:55",
                    }
                ]
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getTopupHistory = async(req, res) => {
    try{
        const { wallet, start, end, limit, offset} = req.query;
        res.status(200).json({
            error: false,
            message: [{
                name: "1234567890",
                mobile: "0.00",
                walletType: "2024-11-12 07:08:55",
                userId: "Success",
                transactionID: "Merchant",
                financialInstitution: "MERCHANT_BNPL",
                amount: "1234567890",
                invoiceID: "1739874588-2162574953",
                InvoiceReference: "1234567890",
                tracenumber: "1234567890",
                transactionStatus: "PROCESSED",
                transactionDate: "2024-11-12 07:08:55",
                transactionData : {
                    from: "1234567890",
                    fromname: "1234567890",
                    fromaccount: "2024-11-12 07:08:55",
                    to: "Success",
                    toname: "Merchant",
                    toaccount: "MERCHANT_BNPL",
                    amount: "1234567890",
                    fee: "0.00",
                    currency: "USD",
                    description: "HelloDube Wallet Refill 5190614578",
                    statusdetail: "REGULAR_TRANSFER",
                    statuscomment: null,
                    url: "https://www.hellodube.com",
                    tracenumber: "1234567890",
                    invoiceid: "1234567890",
                    id: "1234567890",
                    date: "2024-11-12 07:08:55",
                    processdate: "2024-11-12 07:08:55",
                    status: "Success",
                    system: "Bank of Abyssinia",
                }
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getProjectList = async(req, res) => {
    try{
        const { limit, Page, countryCode } = req.query;
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                projectName: "Test Project",
                countryCode: "ET",
                countryName: "Ethiopia",
                creditDisbursementWallet: "1234567890",
                earningWallet: "1234567890",
                settlementBank: "",
                settlementAccount: ""            
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getSupplierList = async(req, res) => {
    try{
        const { limit, offset, countryCode, mobile } = req.query;
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                name: "Test Supplier",
                wallet: "1234567890",
                walletBalance: "0.00",
                pendingWalletBalance: "0.00",
                mobile: "251912345678",
                userId: "123456",
                status: "1",            
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getReceipt = (req, res) =>{
    const {limit,countryCode,page,} = req.params;
    try {
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                id: "1234567890",
                idList: "1234567890",
                receiptFilename:  "1234567890",
                uploadedOn: "2024-11-12 07:08:55",
                order: [
                    {
                    earningWallet: "1234567890",
                    productId: "1234567890",
                    price: "0.00",
                    quantity: "0",
                    supplier_name: "Test Supplier",
                    supplier_id: "123456",
                    order_date: "2024-11-12 07:08:55",
                    hellomarketOrderId: "1234567890",
                status: "Success",
                }
                ]
            }]
        })
    } catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}


const getAllInternationalCustomers = async (req, res) => {
    try {
        const { limit, page, mobile, countryCode } = req.query;
        // Add DB query or forwarding logic here
        res.json({
            error: false,
            totalCount: "100",
            message: [{
                userid: "123456",
                fullname: "Test Customer",
                mobile: "251912345678",
                creditwallet: "1234567890",
                creditbalance: "0.00",
                purchasewallet: "1234567890",
                purchasebalance: "0.00",
                createdon: "2024-11-12 07:08:55",
                active: "1",
                gifts: [
                    {
                        giftWallet: "1234567890",
                        giftedBy: "123456",
                        giftBalance: "0.00",
                        lable: "Gift",
                        theme: "Birthday",
                        sponsorName : "Test Sponsor",
                        sponsorPhone : "251912345678",
                    }
                ]
            }]
        });
    }
    catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}



const getOpenInvoices = (req, res) => {
    const { wallet,start, end, limit, offset } = req.query;
    try {
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                transactionId: "1234567890",
                amount: "0.00",
                customerCreditWallet: "1234567890",
                customerName: "Test User",
                customerMobile:  "251912345678",
                transactionDate: "2024-11-12 07:08:55",
                dueDate: "2024-11-12 07:08:55",
                overdue: "0.00"
            }]
        });
    } catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getAllInternationalInvoices = (req, res) => {
    const { wallet,start, end, limit, offset } = req.query;
    try {
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                transactionId: "1234567890",
                merchantName: "Test Merchant",
                merchantUserId:  "123456",
                merchantMobile: "251912345678",
                customerName: "Test User",
                customerMobile:  "251912345678",
                amount: "0.00",
                transactionDate: "2024-11-12 07:08:55",
                transactionStatus: "Success",
                dueDate: "2024-11-12 07:08:55",
                overdue: "0.00",
                repayed: "0.00",
                repayment: [{
                    transactionId: "1234567890",
                    amount: "0.00",
                    transactionDate: "2024-11-12 07:08:55",
                    customerCreditWallet: "1234567890",
                }]
            }]
        });
    } catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getInternationalTotals = async(req,res) => {
    try{
        res.status(200).json({
            error: false,
            message: [{
                numberOfActiveMerchants: "100",
                numberOfActiveCustomers: "100",
                totalNumberOfMerchants: "100",
                totalNumberOfCustomers: "100",
                totalNumberOfMerchantsWithActivePINs: "100",
                totalNumberOfCustomersWithActivePINs: "100",
                totalNumberOfLoggedInMerchants: "100",
                totalNumberOfLoggedInCustomers: "100",
                totalInvoiceAmount: 100000.000 ,
                totalNumberOfInvoices: "100",
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getAllInvoices = (req, res) => {

    const { wallet, start, end, limit, offset } = req.query;
    try {
        res.status(200).json({
            error: false,
            totalCount: "100",
            message: [{
                transactionId: "1234567890",
                merchantName: "Test Merchant",
                merchantUserId:  "123456",
                merchantMobile: "251912345678",
                customerName: "Test User",
                customerMobile:  "251912345678",
                amount: "0.00",
                transactionDate: "2024-11-12 07:08:55",
                transactionStatus: "Success",
                dueDate: "2024-11-12 07:08:55",
                overdue: "0.00",
                repayed: "0.00",
                repayment: [{
                    transactionId: "1234567890",
                    amount: "0.00",
                    transactionDate: "2024-11-12 07:08:55",
                    customerCreditWallet: "1234567890",
                }]
            }]
        });
    } catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }

}


const getTotals = async(req,res) => {
    try{
        res.status(200).json({
            error: false,
            message: [{
                numberOfActiveMerchants: "100",
                numberOfActiveCustomers: "100",
                totalNumberOfMerchants: "100",
                totalNumberOfCustomers: "100",
                totalNumberOfMerchantsWithActivePINs: "100",
                totalNumberOfCustomersWithActivePINs: "100",
                totalNumberOfLoggedInMerchants: "100",
                totalNumberOfLoggedInCustomers: "100",
                totalInvoiceAmount: 100000.000 ,
                totalNumberOfInvoices: "100",
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getCashInandCashOut = async(req,res) => {
    try{
        res.status(200).json({
            error: false,
            message: [{
                totalCashInAmount: "100000.000",
                totalNumberOfCashIns: "100",
                totalCashoutAmount: "100000.000",
                totalNumberOfCashOuts: "100",
                totalCreditAmount: "100000.000",
                totalNumberOfCredits: "100" 
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getInvicesandRepayments = async(req,res) => {
    try{
        res.status(200).json({
            error: false,
            message: [{
                totalRepayedAmount: "100000.000",
                totalRepayedNumber: "100",
                totalToBePaidAmount: "100000.000",
                totalToBePaidNumber: "100",
                totalOverdueAmount: "100000.000",
                totalOverdueNumber: "100",
                totalInvoiceAmount: "100000.000",
                totalInvoiceNumber: "100"
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

const getRepaymentHistoryList = async(req,res) => {
    const { page, mobile, countryCode, limit} = req.query;
    try{
        res.status(200).json({
            error: false,
            message: [{
                transactionList: "DW12345678AbC1234",
                transactionId: "1234567890",
                paidFrom: "1234567890",
                payerName:  "Test User",
                payerMobile: "251912345678",
                repaidAmount:  "0.00",
                repaymentStatus: "Success",
                transactionDate: "2024-11-12 07:08:55",
                wallets: [
                    {
                        name: "1234567890",
                        wallettype: "MERCHANT_CREDIT",
                        balance: "0.00",
                        bnpl: "0.00",
                    },{
                        name: "9876543210",
                        wallettype: "MERCHANT_AVAILABLE",
                        balance: "0.00",
                        bnpl: "0.00",
                    },{
                        name: "8765432109",
                        wallettype: "MERCHANT_EARNING",
                        balance: "0.00",
                        bnpl: "0.00",
                    }
                ]
            }]
        });
    }catch{
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
}

  module.exports = {
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
  }