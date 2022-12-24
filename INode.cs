using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MDiagramRazorComponent
{
    public interface INode
    {
        string Id { get; set; }
        string Text { get; set; }
        string Type { get; set; }
        string Style { get; set; }
    }
}
