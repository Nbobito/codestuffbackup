//My code is not working here. Please run it on pc(IDE), use w,a,s,d to play :)
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <windows.h>
#include <conio.h>
using namespace std;
bool win=true,food=true;
int score=0;
char screen[100][100]
    {
    "|============================|",
    "|>>>                         |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|                            |",
    "|============================|",
    };
void move(int &x,int &y,int a,int b,char c){
    if(screen[x+a][y+b]=='^' ||screen[x+a][y+b]=='v' || screen[x+a][y+b]=='>' ||screen[x+a][y+b]=='<'||screen[x+a][y+b]=='|'||screen[x][y-1]=='=')
                win=false;
    else{
        if(screen[x+a][y+b]=='O')
            {
            food=false;
            score++;
            }
        screen[x+a][y+b]=c;
        x=x+a;
        y=y+b;
        }
}
int main(){
    int vt[2][10]{{1,2,15,1,15,5,7,9,2,6},
                {4,5,28,4,12,17,21,12,3,11}};
    int direction=3,x=1,y=3,x1=1,y1=1,x2=10,y2=10;
    while(1)
    {
        for(int j=0;j<17;j++)
        cout<<screen[j]<<endl;
        cout<<endl;
        if(kbhit())
        switch(getch())
        {
            case 's':
                if(direction!=2 && direction!=0)
                direction=2;
                break;
            case 'w':
                if(direction!=0 && direction != 2)
                direction=0;
                break;
            case 'a':
                if(direction!=1 && direction!=3)
                direction=1;
                break;
            case 'd':
                if(direction!=3 && direction!=1)
                direction=3;
                break;
        }
        Sleep(100);
        switch(direction){
            case 0:move(x,y,-1,0,'^');break;
            case 1:move(x,y,0,-1,'<');break;
            case 2:move(x,y,1,0,'v');break;
            case 3:move(x,y,0,1,'>');break;
        }
        if(!win) break;
        if(food){
            screen[x1][y1]=' ';
            if(screen[x1+1][y1]=='v')
                x1++;
            else if(screen[x1][y1+1]=='>')
                y1++;
            else if(screen[x1-1][y1]=='^')
                x1--;
            else if(screen[x1][y1-1]=='<')
                y1--;
        }
        srand(time(NULL));
        if(!food){
            do{
            x2=vt[0][rand() % 9 + 0];
            y2=vt[1][rand() % 9 + 0];
            food=true;}
            while(screen[x2][y2]=='>' || screen[x2][y2]=='<' || screen[x2][y2]=='^' || screen[x2][y2]=='v');
        }
        screen[x2][y2]='O';
        system("cls");
    }
    cout<<endl<<endl<<endl<<endl<<"    Score: "<<score;
    getch();
}
