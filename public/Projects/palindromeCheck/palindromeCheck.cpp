#include <bits/stdc++.h>
using namespace std;

bool palin_check(string no)
{
    int len = no.length();
    int lftPtr = 0, rgtPtr = len - 1;

    while (lftPtr < rgtPtr)
    {
        if (no[lftPtr] != no[rgtPtr])
            return 0;

        lftPtr++;
        rgtPtr--;
    }

    return 1;
}

signed main()
{

    string inp_no;
    cin >> inp_no;

    if (palin_check(inp_no))
        cout << "Yes, number is Palindrome!";

    else
        cout << "No, number is not palindrome";
}
