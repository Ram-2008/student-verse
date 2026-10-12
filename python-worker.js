// Fresh worker and namespace for every run. No server-side execution.
self.onmessage=async({data})=>{try{
 const {loadPyodide}=await import('https://cdn.jsdelivr.net/pyodide/v314.0.7/full/pyodide.mjs');
 let stdout='';const py=await loadPyodide({stdout:s=>{if(stdout.length<10000)stdout+=s+'\n';},stderr:s=>{if(stdout.length<10000)stdout+=s+'\n';}});
 self.postMessage({status:'ready'});
 py.globals.set('_student_source',data.code);py.globals.set('_test_json',JSON.stringify(data.tests));py.globals.set('_function_name',data.fn);
 const json=await py.runPythonAsync(`
import json
_cases = json.loads(_test_json)
_namespace = {}
exec(_student_source, _namespace)
_func = _namespace.get(_function_name)
if not callable(_func):
    raise ValueError('Define the required function: ' + _function_name)
_results = []
for _case in _cases:
    try:
        _actual = _func(*_case['args'])
        _ok = type(_actual) is type(_case['expected']) and _actual == _case['expected']
        _results.append({'pass': bool(_ok), 'expected': _case['expected'], 'actual': repr(_actual)[:1000]})
    except Exception as _error:
        _results.append({'pass': False, 'expected': _case['expected'], 'actual': str(_error)[:1000]})
json.dumps(_results)
`);self.postMessage({results:JSON.parse(json),stdout});
}catch(e){self.postMessage({error:String(e.message||e)});}};
