const nodemailer = require('nodemailer');

// Function to send the bill via email
async function sendBill(email, cartItems, totalAmount) {
    // Step 1: Create transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aithagunadeep@gmail.com', // Your email address
            pass: 'Veera@gsrv24',    // Your email password (consider using App password if you have 2FA)
        }
    });

    // Step 2: Format cart items and prepare the email body
    let itemsList = cartItems.map(item => `${item.name} (x${item.quantity}): $${(item.price * item.quantity).toFixed(2)}`).join('\n');

    // Step 3: Send email with defined transport object
    let info = await transporter.sendMail({
        from: '"AgroConnect" <aithagunadeep@gmail.com>', // sender address
        to: email,                                      // list of receivers
        subject: 'Your Bill from AgroConnect',          // Subject line
        text: `Thank you for your purchase! Here are your order details:\n\n${itemsList}\n\nTotal Amount: $${totalAmount}`, // plain text body
    });

    console.log('Bill sent: %s', info.messageId);
}

// Example usage of the sendBill function
let exampleCartItems = [
    { name: 'Apple', price: 2.5, quantity: 2 },
    { name: 'Tomato', price: 1.8, quantity: 3 }
];

let exampleTotalAmount = 11.90;

// Call the function (Replace 'customer@example.com' with the recipient's email)
sendBill('customer@example.com', exampleCartItems, exampleTotalAmount)
    .then(() => console.log('Email sent successfully'))
    .catch(err => console.error('Error sending email: ', err));
