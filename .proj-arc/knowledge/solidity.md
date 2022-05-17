## About Library : `external` vs `internal`

 - Linked Library : `external`
 - Embedded Library :  use `internal`

<br><br><br><br><br>

## Function Selector

First 4 bytes of the `Keccak-256` == `signature of the function`

after hex = parameter

if function expression like below, the `msg.data.length` is `68`(Function selector:`4` + n1:`32` + n2:`32`)

```solidity
function add(uint256 n1, uint256 n2) public pure returns(uint256) {
    return n1 + n2;
}
```