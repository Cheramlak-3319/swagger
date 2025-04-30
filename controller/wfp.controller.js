exports.generateDemmyVoucher = async(req,res) =>{
    try {
        res.status(200).json({
            error: false,
            message:[{
                userId: "123456",
                balance: "0.00",
                createdOn: "2025-02-14 06:14:56",
                creaditWallet: "9289473512"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.getCatagories = async(req, res, next) => {
    try {
        res.status(200).json({
            error: false,
            message: [{
                catagory: "PLW",
                subCatagories: [{
                    id: "11b5cf1c-eda5-0a68-7cd0-675c1b485a8f",
                    name: "Oil",
                    allocatedAmount: "78.75"
                }]
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getBeneficiaryList = async(req,res,next) => {
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                mainWallet: "1234567890",
                beneficiaryName: "John Doe",
                mobile: "1234567890",
                mainWalletBalance: "ABC Bank",
                subWallets :[{
                    walletName: "Oil",
                    walletBalance: "100.00",
                    cycle: "Test Cycle-2"
                }]
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getVouchersList = async(req, res, next)=>{
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                householdId: "ETNUT000000",
                name: "Solomon waleligh",
                mobile: "251961201230",
                wallet: "100.00",
                woreda: [],
                kebele: {},
                balance: "100.00",
                updatedOn: "2025-01-01 06:14:56",
                createdOn: "2025-01-01 06:14:56",
                linked : "http://www.linked.com",
                active : "1",
                cycle :  "Test Cycle-2"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getAllCycles = async (req,res,next) => {
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                id: "123456",
                cycle : " Test Cycle-17",
                active: "1",
                startDate: "2025-01-01 00:00:00",
                endDate: "2025-12-31 23:59:59",
                
            }]
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Internal Server Error"
        })
    }
}


exports.getAllInvoices = async (req, res, next) => {
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                transactionId: "WFPWP8923034201839",
                merchantUserId: "123456",
                merchantName: "Gesese Molla",
                merchantMobile: "251938905964",
                householdId: "123456",
                customerName: "Gesese Moka",
                customerMobile: "251938905964",
                amount: "200.00",
                transactionDate: "2025-01-01 06:14:56",
                transactionStatus: "Success",
                remark: [{
                    categoryName : "Oil",
                    order:[
                        {
                    itemName: "Oil",
                    unitPrice: "100.00",
                    quantity: "10",
                }
            ]
            }]
        }]})
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.getTotalInvoices = async(req,res,next) => {
    try {
        res.status(200).json({
            error: false,
            message: [{
                totalAmount: "10000.00",
                totalNumber: "8000.00"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getTotalCredit = async(req, res, next) =>{
    try {
        res.status(200).json({
            error: false,
            message: [{
                totalCredit: "10000.00",
                totalNumber: "8000.00"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getCashoutTotals = async(req,res,next) =>{
    const {voucher,offset,dateForm,dateTo,limit} = req.query;
    try {
        res.status(200).json({
            error: false,
            message: [{
                totalCashoutAmount: "10000.00",
                totalCashoutNumber: "8000.00",
                totalCashoutFeeAmount: "1000.00",
                totalCashoutFeeNumber: "8000.00"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


exports.getCashouHistory = async(req,res,next) =>{
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                wallet : "1",
                userId : "123456",
                name : "Solomon waleligh",
                mobile : "251961201230",
                bank: "Bank Of Lion",
                amount : "1000.00",
                status : "1",
                requestDate: "2012-12-12 00:00:00",
                transactionDate: {
                    error: "WFPWP8923034201839",
                    message: "WFPWP89230"
                }
            }]
        })
    } catch (error) {
        
    }
}

exports.getCreaditTransferHistory = async(req, res, next) => {
    const {walletId, offset, houseHoldId,dateTo,limit,cycle} = req.query;
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                transactionId: "1",
                householdId: "123456",
                wallet: "1000.00",
                customerName: "John Smith",
                customerMobile: "251961201230",
                amount: "1000.00",
                transactionDate: "2012-12-12 00:00:00",
                transactionStatus: "1000",
                cycle : "Test cycle-2"
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })      
    }
}




exports.getOnboardingList = async(req, res, next) =>{
    try {
        res.status(200).json({
            error: false,
            totalCount: "1000",
            message: [{
                name : "Solomon waleligh",
                mobile : "251961201230",
                active : "1",
                registeredOn: "2012-12-12 00:00:00",
            }]
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.getTotals = async(req,res,next) => {
    try {
        res.status(200).json({
            error: false,
            message: [{
                totalCashoutAmount: "1000",
                totalCashoutNumber: "8000",
                totalCreditAmount: "5000",
                totalCreditNumber: "4000",
                totalInvoiceAmount: "3000",
                totalInvoiceNumber: "2000",
                totalBenefitedMerchantAmount: "1500",
                totalBenefitedMerchantNumber: "1000",
                totalBenefitedBeneficiaryAmount: "500",
                totalBenefitedBeneficiaryNumber: "400",
                totalPurchases: {
                    Vegetables: "100",
                    Fruits: "50",
                    Oil: "20",
                    Eggs: "15"
                }
            }]
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}