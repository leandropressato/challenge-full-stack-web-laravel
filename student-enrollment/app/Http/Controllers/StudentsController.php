<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Students;

class StudentsController extends Controller
{
    public function index()
    {
        $students = Students::all()->toArray();
        return array_reverse($students);
    }

    public function store(Request $request)
    {
        $student = new Students([
            'name' => $request->input('name'), 
            'email' => $request->input('email'), 
            'ra' => $request->input('ra'), 
            'cpf' => $request->input('cpf') 
        ]);
        $user = DB::table('students')->where('cpf', $request->input('cpf'))
        ->orWhere('ra',$request->input('ra'))
        ->first();

        if($user){
            return("CPF ou RA já existe na base de dados");
        }
       // $id = Students::find($request->input('cpf'));
        //$student = Students::find($request->input('cpf'));
        //$a = response()->json($student);
        //print_r($a);exit;   
        $student->save();

        return ("Cadastro efetuado com sucesso");
        //response()->json($user);

    }

    public function show($id)
    {
        $student = Students::find($id);
        return response()->json($student);

    }

    public function update($id, Request $request)
    {
        $student = Students::find($id);
        $student->update($request->all());
        
        return response()->json('Aluno alterado');
    }

    public function destroy($id)
    {
        $student = Students::find($id);
        //var_dump($id);exit;
        $student->delete();

        return response($student);
        //response()->json('Aluno excluido');

    }
}
