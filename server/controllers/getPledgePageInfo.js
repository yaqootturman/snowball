const getPledgeInfo = require('../database/queries/getPledgeInfo')
const getPledgeInstructions = require('../database/queries/getPledgeInstructions')
const getPledgeProsCons = require('../database/queries/getPledgeProsCons')
const getPledgeResources = require('../database/queries/getPledgeResources')
const getPledgeReferences = require('../database/queries/getPledgeReferences')

exports.getPledgePageInfo = (req, res) => {
  const { pledgeID } = req.params

  const pledgePageInfo = Promise.all([getPledgeInfo(pledgeID), getPledgeInstructions(pledgeID), getPledgeProsCons(pledgeID), getPledgeResources(pledgeID), getPledgeReferences(pledgeID)])

  pledgePageInfo.then(result => res.json(result)
  )
    .catch(err => console.log('err', err))
}
