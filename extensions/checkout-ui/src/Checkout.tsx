import {
  reactExtension,
  BlockStack,
  InlineStack,
  Button,
  View,
  Checkbox,
  
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  
  'purchase.checkout.block.render',
  () =>
     <Extension />,
);

function Extension() {
  return (
    <View padding="base" border="base" borderRadius={'loose'}>
    Save your cart
  
    <InlineStack>
      <BlockStack>
      <Checkbox id="checkbox" name="checkbox">
      Product
    </Checkbox>
    <Button
        onPress={() => {
          console.log('button was pressed');
          console.log(this);
          
        }}
      >
        Save
      </Button >
      </BlockStack>
      
    </InlineStack>
    </View>
  );
}
