#include <stdio.h>
FILE *fptr;
int main(){
int game = 1;
printf("Welcome to the Russian Rulet game!\n");
while (game)
{
    printf("To exit type E\nIf you want to continue type anythin beside E\n>");
    char exit[10]; scanf("%s",exit);
    if (exit[0]=='E' || exit[0]=='e')
    {   game = 0;
        break;
    }
    int score1,score2;
    fptr = fopen("game_state.txt","r");
    fscanf(fptr,"%d %d",&score1,&score2);
    printf("Your score: %d\nOpponent's score: %d\n",score1,score2);
    printf("Do you want to continue with previous scores?\nType Y otherwise type anythin else\n>");
    getchar();
    char answer; scanf("%c",&answer);
    if (answer == 'Y' || answer == 'y')
    {
        fclose(fptr);
    }
    else{
        fptr = fopen("game_state.txt","w");
        fprintf(fptr,"0 0");
        fclose(fptr);
        score1 = 0;
        score2 = 0;
    }
    
    printf("Enter a number more than 4 digits: ");
    int n; scanf("%d",&n);
    while(n/1000<1){
        printf(">"); scanf("%d",&n);
    }
    int bullet = n%13;
    int gun[13] = {0,0,0,0,0,0,0,0,0,0,0,0,0};
    gun[bullet] = 1;
    printf("This game is for two players.\n");
   int game_state = 1;
   int counter = 0;
   while(game_state){
    printf("To shot press anything and enter\n>");
    char shot[10]; scanf("%s",shot);
    if(gun[counter]==1){
        printf("You are dead\n");
        score2++;
        fptr = fopen("game_state.txt","w");
        fprintf(fptr,"%d %d",score1,score2);
        fclose(fptr);
        game_state = 0;
        break;
    }
    else{
        printf("You are alive\n");
        counter++;
    }
    printf("It's your oppeonent's turn, to make him shoot pres anything and enter\n");
        scanf("%s",shot);
       if(gun[counter]==1){
        printf("He is dead\nYou won!");
        score1++;
        fptr = fopen("game_state.txt","w");
        fprintf(fptr,"%d %d",score1,score2);
        fclose(fptr);
        game_state = 0;
        break;
    }
    else{
        printf("He is alive\n");
        counter++;
    }
   }
}    
}
