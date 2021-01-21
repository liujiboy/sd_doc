#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> v;
    for(int i=0;i<10;i++)
        v.push_back(i);
    auto print=[](auto x) {cout<<x<<endl;};
    for(auto i:v)
        print(i);
}