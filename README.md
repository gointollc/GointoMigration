# GointoMigration

The migration contract for GoInto's Ethereum smart contracts

## Addresses

Ropsten: `0x55646c2d031c6be279d34b56a050b38543c302d1`
Main Net: `TBD`

## Usage

Some limited public use constant functions are documented below.  For further usage, please see the contract source.

### getContract

Use this function to get the address of a contract using a string key.

    // You need the relevant portions of the ABI
    var migrationABI = [{"constant":true,"inputs":[{"name":"key","type":"string"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"}];

    // Get the contract instance
    var migrate = web3.eth.contract(shortABI).at(TBD);

    // Get the contract address you're looking for
    migrate.getContract("etherep")

### getPermissions

Get the permissions of an address.  Returns `(bool admin, bool manager)`.

    // You need the relevant portions of the ABI
    var migrationABI = [{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"getPermissions","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"type":"function"}];

    // Get the contract instance
    var migrate = web3.eth.contract(shortABI).at(TBD);

    // Get the permissions for an address
    migrate.getPermissions("0x123deadbeef456...")


## Deploy

    var manager = web3.eth.accounts[0];

    var migrationABI = [[{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"getPermissions","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"adminAddress","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"manAddress","type":"address"}],"name":"addManager","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"key","type":"string"}],"name":"getContract","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"string"},{"name":"contractAddress","type":"address"}],"name":"setContract","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"adminAddress","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"manAddress","type":"address"}],"name":"removeManager","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"originalAdmin","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"by","type":"address"},{"indexed":false,"name":"key","type":"string"},{"indexed":false,"name":"contractAddress","type":"address"}],"name":"EventSetContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"by","type":"address"},{"indexed":false,"name":"admin","type":"address"}],"name":"EventAddAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"by","type":"address"},{"indexed":false,"name":"admin","type":"address"}],"name":"EventRemoveAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"by","type":"address"},{"indexed":false,"name":"manager","type":"address"}],"name":"EventAddManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"by","type":"address"},{"indexed":false,"name":"manager","type":"address"}],"name":"EventRemoveManager","type":"event"}]];

    var migrationBytes = "0x6060604052341561000c57fe5b60405160208061077883398101604052515b604080516060810182526001808252602080830191825233600160a060020a0390811684860190815286821660009081529283905294909120925183549251945160ff199093169015151761ff00191661010094151594909402939093176201000060b060020a0319166201000091909316029190911790555b505b6106cf806100a96000396000f300606060405236156100805763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663160a792581146100825780631785f53c146100b95780632d06177a146100d757806335817773146100f55780633f0ed0df1461012c5780637048027514610157578063ac18de4314610175575bfe5b341561008a57fe5b61009e600160a060020a0360043516610193565b60408051921515835290151560208301528051918290030190f35b34156100c157fe5b6100d5600160a060020a03600435166101be565b005b34156100df57fe5b6100d5600160a060020a03600435166102c4565b005b34156100fd57fe5b61011060048035602481019101356103ad565b60408051600160a060020a039092168252519081900360200190f35b341561013457fe5b6100d56024600480358281019291013590600160a060020a039035166103e7565b005b341561015f57fe5b6100d5600160a060020a03600435166104d3565b005b341561017d57fe5b6100d5600160a060020a03600435166105bd565b005b600160a060020a03811660009081526020819052604090205460ff808216916101009004165b915091565b600160a060020a03331660009081526020819052604090205460ff1615156001146101e95760006000fd5b33600160a060020a031681600160a060020a031614156102095760006000fd5b604080516060810182526000808252602080830182815233600160a060020a0390811685870181815288831680875286865295889020965187549451915160ff199095169015151761ff001916610100911515919091021775ffffffffffffffffffffffffffffffffffffffff0000191662010000939092169290920217909355835192835282015281517f679e5977d69249a86f9309ca8028c56a88009f7031ca2cec23876e02ef38584b929181900390910190a15b5b50565b600160a060020a03331660009081526020819052604090205460ff1615156001146102ef5760006000fd5b6040805160608101825260008082526001602080840191825233600160a060020a0390811685870181815288831680875286855295889020965187549551915160ff199096169015151761ff001916610100911515919091021775ffffffffffffffffffffffffffffffffffffffff000019166201000094909216939093021790935583519081529182015281517fe246f71a09a58bfa511362f24d6644c13937d25452b854b93cace4ce1e20fcc4929181900390910190a15b5b50565b6000600183836040518083838082843790910194855250506040519283900360200190922054600160a060020a0316925050505b92915050565b600160a060020a03331660009081526020819052604090205460ff6101009091041615156001146104185760006000fd5b8060018484604051808383808284379190910194855250506040805160209481900385018120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039788161790553380871682529587169181019190915260609381018481529381018790527f81915a67322394b546737ecf7eab9df1cdf51f301d05c3546605581068ec1ec3949388935087925086919060808201858580828437604051920182900397509095505050505050a15b5b505050565b600160a060020a03331660009081526020819052604090205460ff1615156001146104fe5760006000fd5b6040805160608101825260018082526020808301918252600160a060020a0333811684860181815287831660008181528086528890209651875496519251909416620100000275ffffffffffffffffffffffffffffffffffffffff0000199215156101000261ff001995151560ff199098169790971794909416959095171691909117909355835192835282015281517eb767fad7cbc21799057b0422cf4a159a1b3d9b692a42740481ec90a48d3c73929181900390910190a15b5b50565b600160a060020a03331660009081526020819052604090205460ff1615156001146105e85760006000fd5b604080516060810182526000808252602080830182815233600160a060020a0390811685870181815288831680875286865295889020965187549451915160ff199095169015151761ff001916610100911515919091021775ffffffffffffffffffffffffffffffffffffffff0000191662010000939092169290920217909355835192835282015281517f6fb99dfbaecaffbd00b6e5345286861110433633dd0b1c4059be914c05558824929181900390910190a15b5b505600a165627a7a723058209aaf5fcdcf0b5adfc32a031712ee2cbf4637f64f7348dfd29f2ffc413e90dd9b0029";

    // Deploy migration contract
    var contractMigrate = web3.eth.contract(migrationABI);
    var mDeploy = contractMigrate.new(manager, {from: manager, data: migrationBytes, gas: 800000});
    var mAddress = eth.getTransactionReceipt(mDeploy.transactionHash).contractAddress;
    var migrate = contractMigrate.at(mAddress);

    // Set contract addresses in the migration contract
    var setTrans = migrate.setContract("etherep", rep.address, {from: manager, gas: 60000});
    eth.getTransactionReceipt(setTrans)
    var setTrans = migrate.setContract("ratingstore", store.address, {from: manager, gas: 60000});
    eth.getTransactionReceipt(setTrans)