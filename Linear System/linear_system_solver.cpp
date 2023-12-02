#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

int pivot(vector<double> row){
    //Will give the where the sudo-pivot is located
    for (int i = 0; i < row.size(); i++) {  if(row[i]!=0) return i;  }
    return row.size();
}

vector<bool> calculate_pivots(int column ,vector<vector<double> > matrix){
        vector<bool> pivots(matrix.size(),false);
        for (int i = 0; i < matrix.size(); i++)
        {
            if(pivot(matrix[i])==column) pivots[i]=true;
        }
        return pivots;
}

void row_operation(double a, int row1, int row2, vector<vector<double> > &matrix){
    //row2 = row2+a*row1
    for (int col = 0; col < matrix[0].size(); col++)
    {
        matrix[row2][col] = matrix[row2][col] + a*matrix[row1][col];
    }
    
}

void scalar_multiplication(double a,int row1,vector<vector<double> > &matrix){
    for (int col = 0; col < matrix[0].size(); col++)
    {
        matrix[row1][col] = matrix[row1][col]*a;
    }
    cout<<"Operation : R"<<row1<<" -> R"<<row1<<" x "<< a<<endl;
}

void row_interchange(int row1, int row2, vector<vector<double> > &matrix){
    if(row1==row2 || row2>=matrix.size()) return;
    for (int i = 0; i < matrix[0].size(); i++)
    {
        double temp = matrix[row1][i];
        matrix[row1][i] = matrix[row2][i];
        matrix[row2][i] = temp;
    }
    cout<<"Operation : R"<<row1<<" <--> R"<<row2<<endl;
    
}

vector<vector<double> >  solve_matrix(int row,int column, vector<vector<double> > matrix){
    // cloumn number is the number of variables
    // row number is the number of equations

    int pivot_column = -1;
    for (int clm = 0; clm < column; clm++)
    {
        vector<bool> pivot_vec = calculate_pivots(clm,matrix);
        // For every column there should be only one or less pivot
        for (int row1 = 0; row1 < row; row1++)
        {
            if(pivot_vec[row1]){
                for (int row2 = 0; row2 < row; row2++)
                {
                    if(row2!=row1 && matrix[row2][clm]!=0){
                        // pivot of row2 must be 0 so
                        // a*row1 = -row2 ; then a = (-row2)/row1
                        cout<<"For column: "<<clm<<endl;
                        cout<<"\nOperation : R"<<row2<<" -> R"<<row2<<" + "<<(-1*matrix[row2][clm])/matrix[row1][clm]<<" * R"<<row1<<endl;
                        row_operation((-1*matrix[row2][clm])/matrix[row1][clm],row1,row2,matrix);
                    }
                }
                scalar_multiplication(1.0/matrix[row1][clm],row1,matrix);
                pivot_column++;
                row_interchange(row1,pivot_column,matrix);
                
                break;
            }
        }
        
        
        
        
    }

    return matrix;
    
}

int32_t main(){
    int r,c;cin>>r>>c;
    vector<vector<double> > mat(r,vector<double>(c,0));
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cin>>mat[i][j];
        }
        
    }
    
    cout<<"Solving the system:\n";
    vector<vector<double> >after_mat = solve_matrix(r,c,mat);
    
    
    
    for (int i = 0; i < after_mat.size(); i++)
    {
        for (int j = 0; j < after_mat[0].size(); j++)
        {
            cout<<after_mat[i][j]<<" ";
        }
        cout<<endl;
        
    }

    cout<<"Presicion : \n";
        
    for (int i = 0; i < after_mat.size(); i++)
    {
        for (int j = 0; j < after_mat[0].size(); j++)
        {
            cout<<(round(after_mat[i][j] / 0.00000001) * 0.00000001)<<" ";
        }
        cout<<endl;
        
    }
    
    

}