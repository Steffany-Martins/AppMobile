import TabBar from "@mindinventory/react-native-tab-bar-interaction";
...
  render() {
      return (
          <TabBar bgNavBar="white" bgNavBarSelector="white" stroke="skyblue>
            <TabBar.Item
                icon={require('./tab1.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./tab2.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                    {/*Page Content*/}
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./tab3.png')}
                selectedIcon={require('./tab1.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
          </TabBar>
      );
    }