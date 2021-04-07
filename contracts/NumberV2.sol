pragma solidity >0.8.0;

contract NumberV2 {
    uint256 private number;
    address private owner;

    modifier only_owner() {
        require(msg.sender == owner, "Caller is not the owner.");
        _;
    }

    function initialize(address _owner) public {
        owner = _owner;
    }

    function update_number(uint256 _number) public only_owner {
        number = _number;
    }

    function get_number() public view returns(uint256) {
        return number;
    }

    function substract_to_number(uint256 _number) public only_owner returns(bool) {
        require(number >= _number, "We dont like negative numbers.");

        number = number - _number;

        return true;
    }
}