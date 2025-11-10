// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
// Called when answering question about whether NHS number is known
router.post("/magical-powers-answer", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const hasMagicalPowers = req.session.data.hasMagicalPowers;

  // Check whether the variable matches a condition
  if (hasMagicalPowers === "Yes") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/symptoms");
  } else if (hasMagicalPowers === "No") {
    // Send user to a page where they can find their NHS number
    res.redirect("/ineligible");
  } else {
    // Send user back to the question page
    res.redirect("/symptoms");
  }
});
module.exports = router
