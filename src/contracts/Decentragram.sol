pragma solidity ^0.5.0;

contract Decentragram {
  string public name;
  uint public imageCount = 0;
  uint public prescCount=0;
  mapping(uint => Data) public data;
  mapping(uint => Image) public images;

  struct Image {
    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }


  event ImageCreated(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

  constructor() public {
    name = "Decentragram";
  }

  function uploadImage(string memory _imgHash, string memory _description) public {
    // Make sure the image hash exists
    require(bytes(_imgHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment image id
    imageCount ++;

    // Add Image to the contract
    images[imageCount] = Image(imageCount, _imgHash, _description, 0, msg.sender);
    // Trigger an event
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }


  struct Data{
    uint id;
    string prescription;
    address payable author;
  }

  event DataCreated(
    uint id,
    string prescription,
    address payable author
    );
  function set(string memory _prescription) public {
    prescCount ++;
    data[prescCount]=Data(prescCount,_prescription,msg.sender);
    emit DataCreated(prescCount,_prescription,msg.sender);

  }
}
