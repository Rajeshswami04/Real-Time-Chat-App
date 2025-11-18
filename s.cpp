#include <iostream>
using namespace std;
int main()
{
   char (*p)[4][5];
   printf("%d",sizeof(**p));
   return 0;
}
